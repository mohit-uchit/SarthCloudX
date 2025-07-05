"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Clock, Package, LogOut, Copy, ExternalLink, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import type { Order } from "@/lib/types"

// Mock data
const mockOrders: Order[] = [
  {
    _id: "1",
    userId: "user1",
    planName: "Basic VPS",
    category: "normal",
    specs: {
      RAM: "2GB",
      CPU: "1 vCPU",
      Storage: "20GB SSD",
      Location: "US East",
    },
    priceUSD: 15,
    status: "pending",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    _id: "2",
    userId: "user1",
    planName: "FAT Server",
    category: "renewable",
    specs: {
      RAM: "8GB",
      CPU: "4 vCPU",
      Storage: "100GB NVMe",
      Location: "Germany",
    },
    priceUSD: 45,
    status: "delivered",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-12"),
  },
]

export default function UserDashboard() {
  const [user, setUser] = useState<any>(null)
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const copyOrderDetails = (order: Order) => {
    const details = `
Order ID: ${order._id}
Plan: ${order.planName}
RAM: ${order.specs.RAM}
CPU: ${order.specs.CPU}
Storage: ${order.specs.Storage}
Location: ${order.specs.Location}
Price: $${order.priceUSD}
Status: ${order.status}
    `.trim()

    navigator.clipboard.writeText(details)
    toast({
      title: "Order details copied!",
      description: "Order information has been copied to clipboard.",
    })
  }

  const contactSupport = (order: Order) => {
    const message = `Hi! I need support for my order:

Order ID: ${order._id}
Plan: ${order.planName}
Status: ${order.status}

Please assist me with this order.`

    const telegramUrl = `https://t.me/sarthcloudx_bot?text=${encodeURIComponent(message)}`
    window.open(telegramUrl, "_blank")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Server className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SarthCloudX
            </h1>
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

      <div className="container mx-auto px-2 sm:px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-center md:text-left">User Dashboard</h2>
          <p className="text-gray-600 text-center md:text-left">Manage your VPS and RDP services</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Browse Plans</h3>
              <p className="text-sm text-gray-600 mb-4">Explore our VPS and RDP offerings</p>
              <Button asChild className="w-full">
                <Link href="/">View Plans</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <ExternalLink className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Contact Support</h3>
              <p className="text-sm text-gray-600 mb-4">Get help via Telegram</p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => window.open("https://t.me/sarthcloudx_bot", "_blank")}
              >
                Open Telegram
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <AlertCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Policies</h3>
              <p className="text-sm text-gray-600 mb-4">Terms and refund policy</p>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/terms">View Policies</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.length === 0 ? (
            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium mb-2">No orders found</h4>
                <p className="text-gray-600 mb-4">You have no orders yet.</p>
                <Button asChild>
                  <Link href="/">Browse Plans</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {orders.map((order) => (
                <Card key={order._id} className="bg-white/70 backdrop-blur-md border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <CardTitle className="text-lg">{order.planName}</CardTitle>
                        <CardDescription>Order #{order._id}</CardDescription>
                      </div>
                      <Badge
                        variant="secondary"
                        className={
                          order.category === "renewable"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {order.category === "renewable" ? "Renewable" : "Non-Renewable"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">RAM</p>
                        <p className="font-medium">{order.specs.RAM}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">CPU</p>
                        <p className="font-medium">{order.specs.CPU}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Storage</p>
                        <p className="font-medium">{order.specs.Storage}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium">{order.specs.Location}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                      <div>
                        <p className="text-sm text-gray-600">Price</p>
                        <p className="text-lg font-bold text-green-600">${order.priceUSD}/month</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => copyOrderDetails(order)}>
                          <Copy className="h-4 w-4 mr-1" />
                          Copy
                        </Button>
                        <Button size="sm" onClick={() => contactSupport(order)}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Support
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
