import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, ArrowLeft, Shield, AlertTriangle, FileText } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
            <h2 className="text-4xl font-bold mb-4">Terms of Service</h2>
            <p className="text-gray-600 text-lg">Please read these terms carefully before using our services</p>
          </div>

          <div className="grid gap-8">
            {/* Terms of Service */}
            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Terms of Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing and using SarthCloudX services, you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>

                <h3>2. Service Description</h3>
                <p>
                  SarthCloudX provides Virtual Private Server (VPS) and Remote Desktop Protocol (RDP) services with
                  various configurations and specifications.
                </p>

                <h3>3. Account Registration</h3>
                <ul>
                  <li>You must provide accurate and complete information during registration</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You must notify us immediately of any unauthorized use of your account</li>
                </ul>

                <h3>4. Payment Terms</h3>
                <ul>
                  <li>All services are billed in advance on a monthly basis</li>
                  <li>Payment must be made through approved payment methods</li>
                  <li>Failure to pay may result in service suspension or termination</li>
                </ul>

                <h3>5. Service Level Agreement</h3>
                <ul>
                  <li>We guarantee 99.9% uptime for all services</li>
                  <li>Scheduled maintenance windows are excluded from uptime calculations</li>
                  <li>Service credits may be provided for extended outages</li>
                </ul>

                <h3>6. Data Backup and Security</h3>
                <ul>
                  <li>Regular backups are performed but not guaranteed</li>
                  <li>You are responsible for maintaining your own backups</li>
                  <li>We implement industry-standard security measures</li>
                </ul>
              </CardContent>
            </Card>

            {/* Prohibited Activities */}
            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <span>Prohibited Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-red-600 font-semibold">
                  The following activities are strictly prohibited and may result in immediate service termination:
                </p>

                <ul className="text-red-600">
                  <li>
                    <strong>Cryptocurrency Mining:</strong> Bitcoin, Ethereum, or any other cryptocurrency mining
                  </li>
                  <li>
                    <strong>Phishing:</strong> Creating fake websites to steal personal information
                  </li>
                  <li>
                    <strong>Spam:</strong> Sending unsolicited bulk emails or messages
                  </li>
                  <li>
                    <strong>Illegal Content:</strong> Hosting or distributing illegal materials
                  </li>
                  <li>
                    <strong>DDoS Attacks:</strong> Launching attacks against other servers or networks
                  </li>
                  <li>
                    <strong>Proxy/VPN Abuse:</strong> Running open proxies or VPN services for malicious purposes
                  </li>
                  <li>
                    <strong>Adult Content:</strong> Hosting pornographic or adult content
                  </li>
                  <li>
                    <strong>Copyright Infringement:</strong> Distributing copyrighted materials without permission
                  </li>
                  <li>
                    <strong>Hacking Tools:</strong> Hosting or using tools for unauthorized access
                  </li>
                  <li>
                    <strong>Resource Abuse:</strong> Excessive CPU, memory, or bandwidth usage that affects other users
                  </li>
                </ul>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                  <p className="text-red-800 font-semibold">⚠️ Warning:</p>
                  <p className="text-red-700">
                    Violation of these terms will result in immediate account suspension without refund. We reserve the
                    right to report illegal activities to appropriate authorities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Refund Policy */}
            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span>Refund Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800 font-bold text-lg">❌ NO REFUND POLICY</p>
                  <p className="text-red-700">
                    All sales are final. No refunds will be provided once a VPS/RDP service has been delivered and
                    credentials have been provided.
                  </p>
                </div>

                <h3>Policy Details</h3>
                <ul>
                  <li>Once server credentials are delivered, the service is considered delivered</li>
                  <li>No refunds for change of mind or unused services</li>
                  <li>No refunds for account suspensions due to policy violations</li>
                  <li>Service credits may be provided at our discretion for extended outages</li>
                </ul>

                <h3>Exceptions</h3>
                <p>Refunds may only be considered in the following exceptional circumstances:</p>
                <ul>
                  <li>Service was never delivered due to technical issues on our end</li>
                  <li>Duplicate payments made in error</li>
                  <li>Service specifications significantly differ from what was ordered</li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <p className="text-blue-800 font-semibold">💡 Recommendation:</p>
                  <p className="text-blue-700">
                    Please carefully review all service specifications before making a purchase. Contact our support
                    team if you have any questions before ordering.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Contact & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Telegram Support</h4>
                    <p className="text-gray-600 mb-2">24/7 support available</p>
                    <Button asChild>
                      <a href="https://t.me/sarthcloudx_bot" target="_blank" rel="noopener noreferrer">
                        Contact @sarthcloudx_bot
                      </a>
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p className="text-gray-600">
                      We typically respond to support requests within 2-4 hours during business hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Last updated: January 2024</p>
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <Link href="/">Return to Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
