"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import {
  Server,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Search,
  Activity,
  Package,
  DollarSign,
  TrendingUp,
  Download,
  Send,
  CheckCircle,
  AlertCircle,
  Users,
  Calendar,
  TrendingDown,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import type { Order, ServerCredential } from "@/lib/types"

// Enhanced mock data with more realistic profit/loss scenarios
const mockOrders: Order[] = [
  {
    _id: "ORD001",
    userId: "user1",
    planName: "Best Buy DO1",
    category: "normal",
    specs: { RAM: "8GB", CPU: "Premium Ryzen (4 Cores)", Storage: "160GB", Location: "US East" },
    priceUSD: 4.2,
    priceINR: 350,
    amount: 4.2,
    loss: 0,
    status: "delivered",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-16"),
  },
  {
    _id: "ORD002",
    userId: "user2",
    planName: "FAT Plan 4/16/1TB",
    category: "renewable",
    specs: { RAM: "16GB", CPU: "4 vCPU", Storage: "1TB NVMe", Location: "Germany" },
    priceUSD: 14,
    priceINR: 1160,
    amount: 14,
    loss: 2.5,
    status: "delivered",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-12"),
  },
  {
    _id: "ORD003",
    userId: "user3",
    planName: "Best Choice NP2",
    category: "normal",
    specs: { RAM: "16GB", CPU: "Premium Ryzen (8 Cores)", Storage: "512GB", Location: "USA" },
    priceUSD: 14.5,
    priceINR: 1280,
    amount: 14.5,
    loss: 0,
    status: "pending",
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18"),
  },
  {
    _id: "ORD004",
    userId: "user4",
    planName: "EPYC Greyhound Dedicated",
    category: "dedicated",
    specs: { RAM: "128GB DDR4", CPU: "AMD EPYC 7551P (32 Cores)", Storage: "3.2TB NVMe", Location: "USA" },
    priceUSD: 80,
    priceINR: 6660,
    amount: 80,
    loss: 15,
    status: "delivered",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-07"),
  },
  {
    _id: "ORD005",
    userId: "user5",
    planName: "Premium USA Plan SR2",
    category: "renewable",
    specs: { RAM: "16GB", CPU: "Premium Intel (4 Cores)", Storage: "500GB", Location: "Canada" },
    priceUSD: 15,
    priceINR: 1350,
    amount: 15,
    loss: 3,
    status: "delivered",
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-14"),
  },
]

const mockServers: ServerCredential[] = [
  {
    _id: "SRV001",
    email: "user1@example.com",
    password: "SecurePass123",
    ip: "192.168.1.100",
    username: "admin",
    startDate: new Date("2024-01-16"),
    customerNumber: "CUST001",
    os: "Windows Server 2022",
    telegramUsername: "@user1",
    orderId: "ORD001",
    isActive: true,
    pingStatus: "online",
  },
  {
    _id: "SRV002",
    email: "user2@example.com",
    password: "SecurePass456",
    ip: "192.168.1.101",
    username: "root",
    startDate: new Date("2024-01-12"),
    customerNumber: "CUST002",
    os: "Ubuntu 22.04",
    telegramUsername: "@user2",
    orderId: "ORD002",
    isActive: true,
    pingStatus: "online",
  },
]

// Profit/Loss Analytics Data
const profitLossData = [
  { month: "Jan", revenue: 127.7, costs: 20.5, profit: 107.2 },
  { month: "Feb", revenue: 145.2, costs: 25.8, profit: 119.4 },
  { month: "Mar", revenue: 162.8, costs: 18.2, profit: 144.6 },
  { month: "Apr", revenue: 178.5, costs: 32.1, profit: 146.4 },
  { month: "May", revenue: 195.3, costs: 28.7, profit: 166.6 },
  { month: "Jun", revenue: 210.8, costs: 35.4, profit: 175.4 },
]

const categoryData = [
  { name: "Non-Renewable", value: 35, revenue: 45.2, color: "#3B82F6" },
  { name: "Renewable", value: 40, revenue: 58.7, color: "#10B981" },
  { name: "Dedicated", value: 15, revenue: 80.0, color: "#F59E0B" },
  { name: "Storage", value: 10, revenue: 25.3, color: "#EF4444" },
]

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const [servers, setServers] = useState<ServerCredential[]>(mockServers)
  const [searchTerm, setSearchTerm] = useState("")
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false)
  const [isServerDialogOpen, setIsServerDialogOpen] = useState(false)
  const [editingOrder, setEditingOrder] = useState<Order | null>(null)
  const [editingServer, setEditingServer] = useState<ServerCredential | null>(null)
  const [newOrder, setNewOrder] = useState({
    planName: "",
    category: "normal" as "normal" | "renewable" | "dedicated",
    priceUSD: 0,
    priceINR: 0,
    amount: 0,
    loss: 0,
    status: "pending" as "pending" | "delivered" | "cancelled",
    specs: {
      RAM: "",
      CPU: "",
      Storage: "",
      Location: "",
    },
  })
  const [newServer, setNewServer] = useState({
    email: "",
    password: "",
    ip: "",
    username: "",
    customerNumber: "",
    os: "",
    telegramUsername: "",
    orderId: "",
  })
  const router = useRouter()
  const { toast } = useToast()

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

  // CRUD Operations for Orders
  const createOrder = () => {
    const order: Order = {
      _id: `ORD${String(orders.length + 1).padStart(3, "0")}`,
      userId: `user${orders.length + 1}`,
      ...newOrder,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setOrders([...orders, order])
    setNewOrder({
      planName: "",
      category: "normal",
      priceUSD: 0,
      priceINR: 0,
      amount: 0,
      loss: 0,
      status: "pending",
      specs: { RAM: "", CPU: "", Storage: "", Location: "" },
    })
    setIsOrderDialogOpen(false)
    toast({ title: "Order created successfully!" })
  }

  const updateOrder = (orderId: string, updates: Partial<Order>) => {
    setOrders((prev) =>
      prev.map((order) => (order._id === orderId ? { ...order, ...updates, updatedAt: new Date() } : order)),
    )
    toast({ title: "Order updated successfully!" })
  }

  const deleteOrder = (orderId: string) => {
    setOrders((prev) => prev.filter((order) => order._id !== orderId))
    toast({ title: "Order deleted successfully!" })
  }

  // CRUD Operations for Servers
  const createServer = () => {
    const server: ServerCredential = {
      _id: `SRV${String(servers.length + 1).padStart(3, "0")}`,
      ...newServer,
      startDate: new Date(),
      isActive: true,
      pingStatus: "online",
    }
    setServers([...servers, server])
    setNewServer({
      email: "",
      password: "",
      ip: "",
      username: "",
      customerNumber: "",
      os: "",
      telegramUsername: "",
      orderId: "",
    })
    setIsServerDialogOpen(false)
    toast({ title: "Server created successfully!" })
  }

  const updateServer = (serverId: string, updates: Partial<ServerCredential>) => {
    setServers((prev) => prev.map((server) => (server._id === serverId ? { ...server, ...updates } : server)))
    toast({ title: "Server updated successfully!" })
  }

  const deleteServer = (serverId: string) => {
    setServers((prev) => prev.filter((server) => server._id !== serverId))
    toast({ title: "Server deleted successfully!" })
  }

  const pingServer = async (serverId: string) => {
    updateServer(serverId, { pingStatus: "checking" })
    setTimeout(() => {
      const isOnline = Math.random() > 0.2
      updateServer(serverId, { pingStatus: isOnline ? "online" : "offline" })
      toast({
        title: "Ping completed",
        description: `Server is ${isOnline ? "online" : "offline"}`,
        variant: isOnline ? "default" : "destructive",
      })
    }, 2000)
  }

  const exportToCSV = () => {
    const csvContent = [
      ["Order ID", "Plan Name", "Category", "Price USD", "Price INR", "Amount", "Loss", "Profit", "Status", "Created"],
      ...orders.map((order) => [
        order._id,
        order.planName,
        order.category,
        order.priceUSD,
        order.priceINR,
        order.amount || order.priceUSD,
        order.loss || 0,
        (order.amount || order.priceUSD) - (order.loss || 0),
        order.status,
        order.createdAt.toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "orders-profit-loss.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (!user) {
    return <div>Loading...</div>
  }

  const totalRevenue = orders
    .filter((o) => o.status === "delivered")
    .reduce((sum, o) => sum + (o.amount || o.priceUSD), 0)
  const totalLoss = orders.reduce((sum, o) => sum + (o.loss || 0), 0)
  const netProfit = totalRevenue - totalLoss
  const pendingOrders = orders.filter((o) => o.status === "pending").length
  const deliveredOrders = orders.filter((o) => o.status === "delivered").length
  const totalOrders = orders.length
  const avgOrderValue = totalRevenue / (deliveredOrders || 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Server className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SarthCloudX Admin
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/dashboard/admin/sales">Sales Dashboard</Link>
            </Button>
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
          <h2 className="text-3xl font-bold mb-2">Admin Dashboard</h2>
          <p className="text-gray-600">Manage orders, servers, and monitor performance with profit/loss analytics</p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-600">${totalRevenue.toFixed(2)}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last month
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
                  <p className="text-sm text-gray-600">Net Profit</p>
                  <p className="text-2xl font-bold text-blue-600">${netProfit.toFixed(2)}</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15.8% from last month
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
                  <p className="text-sm text-gray-600">Total Loss</p>
                  <p className="text-2xl font-bold text-red-600">${totalLoss.toFixed(2)}</p>
                  <p className="text-xs text-red-600 flex items-center mt-1">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    +5.2% from last month
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Order Value</p>
                  <p className="text-2xl font-bold text-purple-600">${avgOrderValue.toFixed(2)}</p>
                  <p className="text-xs text-purple-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.3% from last month
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profit/Loss Analytics Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Profit & Loss Trend</CardTitle>
              <CardDescription>Monthly revenue, costs, and profit analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={profitLossData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [`$${value}`, name]} />
                  <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} name="Revenue" />
                  <Line type="monotone" dataKey="costs" stroke="#EF4444" strokeWidth={2} name="Costs" />
                  <Line type="monotone" dataKey="profit" stroke="#3B82F6" strokeWidth={2} name="Profit" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Revenue by Category</CardTitle>
              <CardDescription>Distribution of revenue across plan categories</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, revenue }) => `${name}: $${revenue}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="revenue"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="servers">Servers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          {/* Orders Tab with CRUD */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Order Management</h3>
              <div className="flex space-x-2">
                <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Order
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create New Order</DialogTitle>
                      <DialogDescription>Add a new order to the system</DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Plan Name</Label>
                        <Input
                          value={newOrder.planName}
                          onChange={(e) => setNewOrder({ ...newOrder, planName: e.target.value })}
                          placeholder="Enter plan name"
                        />
                      </div>
                      <div>
                        <Label>Category</Label>
                        <Select
                          value={newOrder.category}
                          onValueChange={(value: "normal" | "renewable" | "dedicated") =>
                            setNewOrder({ ...newOrder, category: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="normal">Non-Renewable</SelectItem>
                            <SelectItem value="renewable">Renewable</SelectItem>
                            <SelectItem value="dedicated">Dedicated</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Price USD</Label>
                        <Input
                          type="number"
                          value={newOrder.priceUSD}
                          onChange={(e) => setNewOrder({ ...newOrder, priceUSD: Number.parseFloat(e.target.value) })}
                          placeholder="0.00"
                        />
                      </div>
                      <div>
                        <Label>Price INR</Label>
                        <Input
                          type="number"
                          value={newOrder.priceINR}
                          onChange={(e) => setNewOrder({ ...newOrder, priceINR: Number.parseFloat(e.target.value) })}
                          placeholder="0.00"
                        />
                      </div>
                      <div>
                        <Label>Amount Received</Label>
                        <Input
                          type="number"
                          value={newOrder.amount}
                          onChange={(e) => setNewOrder({ ...newOrder, amount: Number.parseFloat(e.target.value) })}
                          placeholder="0.00"
                        />
                      </div>
                      <div>
                        <Label>Loss Amount</Label>
                        <Input
                          type="number"
                          value={newOrder.loss}
                          onChange={(e) => setNewOrder({ ...newOrder, loss: Number.parseFloat(e.target.value) })}
                          placeholder="0.00"
                        />
                      </div>
                      <div>
                        <Label>RAM</Label>
                        <Input
                          value={newOrder.specs.RAM}
                          onChange={(e) =>
                            setNewOrder({ ...newOrder, specs: { ...newOrder.specs, RAM: e.target.value } })
                          }
                          placeholder="8GB"
                        />
                      </div>
                      <div>
                        <Label>CPU</Label>
                        <Input
                          value={newOrder.specs.CPU}
                          onChange={(e) =>
                            setNewOrder({ ...newOrder, specs: { ...newOrder.specs, CPU: e.target.value } })
                          }
                          placeholder="4 vCPU"
                        />
                      </div>
                      <div>
                        <Label>Storage</Label>
                        <Input
                          value={newOrder.specs.Storage}
                          onChange={(e) =>
                            setNewOrder({ ...newOrder, specs: { ...newOrder.specs, Storage: e.target.value } })
                          }
                          placeholder="100GB SSD"
                        />
                      </div>
                      <div>
                        <Label>Location</Label>
                        <Input
                          value={newOrder.specs.Location}
                          onChange={(e) =>
                            setNewOrder({ ...newOrder, specs: { ...newOrder.specs, Location: e.target.value } })
                          }
                          placeholder="US East"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsOrderDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={createOrder}>Create Order</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button onClick={exportToCSV} variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Plan Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Loss</TableHead>
                      <TableHead>Profit</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders
                      .filter(
                        (order) =>
                          order.planName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order._id.toLowerCase().includes(searchTerm.toLowerCase()),
                      )
                      .map((order) => (
                        <TableRow key={order._id}>
                          <TableCell className="font-mono text-sm">{order._id}</TableCell>
                          <TableCell className="font-medium">{order.planName}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{order.category}</Badge>
                          </TableCell>
                          <TableCell>${order.priceUSD}</TableCell>
                          <TableCell className="text-green-600">${order.amount || order.priceUSD}</TableCell>
                          <TableCell className="text-red-600">${order.loss || 0}</TableCell>
                          <TableCell className="text-blue-600 font-semibold">
                            ${((order.amount || order.priceUSD) - (order.loss || 0)).toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                order.status === "delivered"
                                  ? "default"
                                  : order.status === "pending"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              {order.status === "pending" && (
                                <Button size="sm" onClick={() => updateOrder(order._id, { status: "delivered" })}>
                                  <CheckCircle className="h-3 w-3" />
                                </Button>
                              )}
                              <Button size="sm" variant="outline">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => deleteOrder(order._id)}>
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Servers Tab with CRUD */}
          <TabsContent value="servers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Server Management</h3>
              <Dialog open={isServerDialogOpen} onOpenChange={setIsServerDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Server
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Server</DialogTitle>
                    <DialogDescription>Enter server credentials and details</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Email</Label>
                      <Input
                        value={newServer.email}
                        onChange={(e) => setNewServer({ ...newServer, email: e.target.value })}
                        placeholder="user@example.com"
                      />
                    </div>
                    <div>
                      <Label>Password</Label>
                      <Input
                        type="password"
                        value={newServer.password}
                        onChange={(e) => setNewServer({ ...newServer, password: e.target.value })}
                        placeholder="Server password"
                      />
                    </div>
                    <div>
                      <Label>IP Address</Label>
                      <Input
                        value={newServer.ip}
                        onChange={(e) => setNewServer({ ...newServer, ip: e.target.value })}
                        placeholder="192.168.1.100"
                      />
                    </div>
                    <div>
                      <Label>Username</Label>
                      <Input
                        value={newServer.username}
                        onChange={(e) => setNewServer({ ...newServer, username: e.target.value })}
                        placeholder="admin"
                      />
                    </div>
                    <div>
                      <Label>Customer Number</Label>
                      <Input
                        value={newServer.customerNumber}
                        onChange={(e) => setNewServer({ ...newServer, customerNumber: e.target.value })}
                        placeholder="CUST001"
                      />
                    </div>
                    <div>
                      <Label>Operating System</Label>
                      <Select value={newServer.os} onValueChange={(value) => setNewServer({ ...newServer, os: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select OS" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Windows Server 2022">Windows Server 2022</SelectItem>
                          <SelectItem value="Windows Server 2019">Windows Server 2019</SelectItem>
                          <SelectItem value="Ubuntu 22.04">Ubuntu 22.04</SelectItem>
                          <SelectItem value="CentOS 8">CentOS 8</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Telegram Username</Label>
                      <Input
                        value={newServer.telegramUsername}
                        onChange={(e) => setNewServer({ ...newServer, telegramUsername: e.target.value })}
                        placeholder="@username"
                      />
                    </div>
                    <div>
                      <Label>Order ID</Label>
                      <Select
                        value={newServer.orderId}
                        onValueChange={(value) => setNewServer({ ...newServer, orderId: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Order" />
                        </SelectTrigger>
                        <SelectContent>
                          {orders.map((order) => (
                            <SelectItem key={order._id} value={order._id}>
                              {order._id} - {order.planName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsServerDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={createServer}>Add Server</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Server ID</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>Username</TableHead>
                      <TableHead>OS</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ping</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {servers.map((server) => (
                      <TableRow key={server._id}>
                        <TableCell className="font-mono text-sm">{server._id}</TableCell>
                        <TableCell className="font-mono">{server.ip}</TableCell>
                        <TableCell>{server.username}</TableCell>
                        <TableCell>{server.os}</TableCell>
                        <TableCell>{server.customerNumber}</TableCell>
                        <TableCell>
                          <Badge variant={server.isActive ? "default" : "secondary"}>
                            {server.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                server.pingStatus === "online"
                                  ? "bg-green-500"
                                  : server.pingStatus === "offline"
                                    ? "bg-red-500"
                                    : "bg-yellow-500"
                              }`}
                            />
                            <span className="text-xs capitalize">{server.pingStatus}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => pingServer(server._id)}
                              disabled={server.pingStatus === "checking"}
                            >
                              <Activity className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => deleteServer(server._id)}>
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <h3 className="text-xl font-semibold">Detailed Analytics</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Total Orders</h3>
                  <p className="text-2xl font-bold text-blue-600">{totalOrders}</p>
                  <p className="text-sm text-gray-600">All time orders</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Active Servers</h3>
                  <p className="text-2xl font-bold text-green-600">{servers.filter((s) => s.isActive).length}</p>
                  <p className="text-sm text-gray-600">Currently running</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Profit Margin</h3>
                  <p className="text-2xl font-bold text-purple-600">{((netProfit / totalRevenue) * 100).toFixed(1)}%</p>
                  <p className="text-sm text-gray-600">Overall margin</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Order Status Distribution</CardTitle>
                <CardDescription>Breakdown of orders by status</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={[
                      { status: "Pending", count: pendingOrders, color: "#F59E0B" },
                      { status: "Delivered", count: deliveredOrders, color: "#10B981" },
                      {
                        status: "Cancelled",
                        count: orders.filter((o) => o.status === "cancelled").length,
                        color: "#EF4444",
                      },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="status" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            <h3 className="text-xl font-semibold">Admin Tools</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Telegram Bot</span>
                  </CardTitle>
                  <CardDescription>Send manual messages to the Telegram bot</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => {
                      const message = "Admin message from SarthCloudX dashboard"
                      const telegramUrl = `https://t.me/sarthcloudx_bot?text=${encodeURIComponent(message)}`
                      window.open(telegramUrl, "_blank")
                    }}
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Export Data</span>
                  </CardTitle>
                  <CardDescription>Export orders and server data to CSV</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={exportToCSV} variant="outline" className="w-full bg-transparent">
                    Export Orders
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" />
                    <span>System Health</span>
                  </CardTitle>
                  <CardDescription>Check system status and ping all servers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => {
                      servers.forEach((server) => pingServer(server._id))
                      toast({
                        title: "Ping started",
                        description: "Checking all servers...",
                      })
                    }}
                  >
                    Ping All Servers
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
