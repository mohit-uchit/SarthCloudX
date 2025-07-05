export interface User {
  _id: string
  username: string
  email: string
  passwordHash: string
  role: "user" | "admin"
  telegramUsername?: string
  createdAt: Date
}

export interface Order {
  _id: string
  userId: string
  planName: string
  category: "normal" | "renewable" | "dedicated"
  planType?: string
  specs: {
    RAM: string
    CPU: string
    Storage: string
    Location: string
    OS?: string
    Bandwidth?: string
    Warranty?: string
    Validity?: string
  }
  priceUSD: number
  priceINR: number
  amount?: number
  loss?: number
  status: "pending" | "delivered" | "cancelled"
  createdAt: Date
  updatedAt: Date
}

export interface ServerCredential {
  _id: string
  email: string
  password: string
  ip: string
  username: string
  startDate: Date
  customerNumber: string
  os: string
  telegramUsername?: string
  orderId: string
  isActive: boolean
  pingStatus: "online" | "offline" | "checking"
}

export interface VPSPlan {
  id: string
  name: string
  category: "normal" | "renewable" | "dedicated"
  type?: string
  specs: {
    RAM: string
    CPU: string
    Storage: string
    Location: string
    OS?: string[]
    Bandwidth?: string
    Warranty?: string
    Validity?: string
    DailyGrowth?: string
    DiskType?: string
    Renewable?: boolean
  }
  priceUSD: number
  priceINR: number
  originalPriceUSD?: number
  originalPriceINR?: number
  features: string[]
  isPopular?: boolean
  note?: string
}
