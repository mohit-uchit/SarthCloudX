"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Server, LogOut, DollarSign, TrendingUp, TrendingDown, Download, Calendar, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

// Mock sales data
const salesData = [
  { date: "2024-01-01", revenue: 150, loss: 10, orders: 3 },
  { date: "2024-01-02", revenue: 200, loss: 0, orders: 4 },
  { date: "2024-01-03", revenue: 180, loss: 15, orders: 3 },
  { date: "2024-01-04", revenue: 220, loss: 5, orders: 5 },
  { date: "2024-01-05", revenue: 300, loss: 20, orders: 6 },
  { date: "2024-01-06", revenue: 250, loss: 0, orders: 4 },
  { date: "2024-01-07", revenue: 280, loss: 10, orders: 5 },
]

const topPlans = [
  { name: "FAT Server", sales: 45, revenue: 2025 },
  { name: "Basic VPS", sales: 32, revenue: 480 },
  { name: "NVMe Performance", sales: 28, revenue: 2380 },
  { name: "Enterprise Dedicated", sales: 15, revenue: 2250 },
]

const locationData = [
  { name: "US East", value: 35, color: "#3B82F6" },
  { name: "Germany", value: 25, color: "#10B981" },
  { name: "Singapore", value: 20, color: "#F59E0B" },
  { name: "US West", value: 20, color: "#EF4444" },
]

export default function SalesDashboard() {
  const [user, setUser] = useState<any>(null)
  const [dateRange, setDateRange] = useState<any>(null)
  const [selectedPeriod, setSelectedPeriod] = useState("7d")
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }
    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== "admin") {
      router.push("/dashboard/user")
      return
    }
    setUser(parsedUser)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const exportSalesData = () => {
    const csvContent = [
      ["Date", "Revenue", "Loss", "Profit", "Orders"],
      ...salesData.map((day) => [day.date, day.revenue, day.loss, day.revenue - day.loss, day.orders]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "sales-data.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (!user) {
    return <div>Loading...</div>
  }

  const totalRevenue = salesData.reduce((sum, day) => sum + day.revenue, 0)
  const totalLoss = salesData.reduce((sum, day) => sum + day.loss, 0)
  const netProfit = totalRevenue - totalLoss
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0)
  const avgOrderValue = totalRevenue / totalOrders

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/dashboard/admin">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sales Dashboard
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, {user.username}</span>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Sales Analytics</h2>
          <p className="text-gray-600">Track revenue, losses, and performance metrics</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={exportSalesData} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-600">${totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last period
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Loss</p>
                  <p className="text-2xl font-bold text-red-600">${totalLoss.toLocaleString()}</p>
                  <p className="text-xs text-red-600 flex items-center mt-1">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    +5.2% from last period
                  </p>
                </div>
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Net Profit</p>
                  <p className="text-2xl font-bold text-blue-600">${netProfit.toLocaleString()}</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15.8% from last period
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Order Value</p>
                  <p className="text-2xl font-bold text-purple-600">${avgOrderValue.toFixed(0)}</p>
                  <p className="text-xs text-purple-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.3% from last period
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Over Time */}
          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Revenue & Loss Over Time</CardTitle>
              <CardDescription>Daily revenue and loss tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(value) =>
                      new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                    }
                  />
                  <YAxis />
                  <Tooltip
                    labelFormatter={(value) => new Date(value).toLocaleDateString()}
                    formatter={(value, name) => [`$${value}`, name === "revenue" ? "Revenue" : "Loss"]}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} />
                  <Line type="monotone" dataKey="loss" stroke="#EF4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Selling Plans */}
          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Top Selling Plans</CardTitle>
              <CardDescription>Most popular VPS/RDP plans</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topPlans}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [value, name === "sales" ? "Sales" : "Revenue ($)"]} />
                  <Bar dataKey="sales" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Distribution */}
          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Sales by Location</CardTitle>
              <CardDescription>Geographic distribution of orders</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {locationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Performance */}
          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Performance Summary</CardTitle>
              <CardDescription>Key metrics breakdown</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-xl font-bold text-green-600">{totalOrders}</p>
                </div>
                <Badge className="bg-green-100 text-green-800">+23%</Badge>
              </div>

              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                  <p className="text-xl font-bold text-blue-600">68.5%</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">+5.2%</Badge>
              </div>

              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Customer Retention</p>
                  <p className="text-xl font-bold text-purple-600">84.2%</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800">+12%</Badge>
              </div>

              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Refund Rate</p>
                  <p className="text-xl font-bold text-orange-600">2.1%</p>
                </div>
                <Badge className="bg-orange-100 text-orange-800">-0.8%</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
