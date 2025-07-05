import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, ArrowLeft, MessageCircle, Clock, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Server className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SarthCloudX
            </h1>
          </div>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact & Support</h2>
            <p className="text-gray-600 text-lg">Get in touch with our team for any questions or support needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Primary Contact */}
            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <span>Telegram Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Our primary support channel is through Telegram. Get instant responses from our support team.
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Bot:</strong> @sarthcloudx_bot
                  </p>
                  <p>
                    <strong>Response Time:</strong> Usually within 2-4 hours
                  </p>
                  <p>
                    <strong>Availability:</strong> 24/7
                  </p>
                </div>
                <Button asChild className="w-full">
                  <a href="https://t.me/sarthcloudx_bot" target="_blank" rel="noopener noreferrer">
                    Start Telegram Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Support Features */}
            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl">
              <CardHeader>
                <CardTitle>What We Can Help With</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>VPS/RDP setup and configuration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Technical support and troubleshooting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Account and billing questions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Plan recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Custom server configurations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Migration assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Support Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Fast Response</h3>
                <p className="text-2xl font-bold text-blue-600">2-4 hrs</p>
                <p className="text-sm text-gray-600">Average response time</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Satisfied Customers</h3>
                <p className="text-2xl font-bold text-green-600">98%</p>
                <p className="text-sm text-gray-600">Customer satisfaction rate</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">24/7 Support</h3>
                <p className="text-2xl font-bold text-purple-600">Always</p>
                <p className="text-sm text-gray-600">Available when you need us</p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">How quickly will my VPS/RDP be delivered?</h4>
                <p className="text-gray-600">
                  Most orders are processed and delivered within 2-6 hours. Complex configurations may take up to 24
                  hours.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                <p className="text-gray-600">
                  We accept various payment methods including cryptocurrency, PayPal, and bank transfers. Contact us for
                  specific payment options.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Can I upgrade my plan later?</h4>
                <p className="text-gray-600">
                  Yes, you can upgrade your plan at any time. Contact our support team to discuss upgrade options and
                  pricing.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Do you provide technical support?</h4>
                <p className="text-gray-600">
                  Yes, we provide comprehensive technical support for all our services. Our team can help with setup,
                  configuration, and troubleshooting.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">What if my server goes down?</h4>
                <p className="text-gray-600">
                  We monitor all servers 24/7. If there's an issue, we'll work to resolve it immediately. Contact
                  support if you experience any problems.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Browse our plans or contact us for a custom solution</p>
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <Link href="/">View Plans</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://t.me/sarthcloudx_bot" target="_blank" rel="noopener noreferrer">
                  Contact Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
