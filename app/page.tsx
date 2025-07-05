'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Copy,
  ExternalLink,
  Server,
  Shield,
  Zap,
  Globe,
  Crown,
  Star,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import type { VPSPlan } from '@/lib/types';
import {
  allPlans,
  nonRenewablePlans,
  renewablePlans,
  unifiedFATPlans,
  unifiedExpandingPlans,
  storageVPSPlans,
  hybridSSDPlans,
  nvmeOffers,
  nvmeStoragePlans,
  dedicatedCorePlans,
  unlimitedExpandingPlans,
  dedicatedServerPlans,
} from '@/lib/plans-data';

const buyViaTelegram = (plan: VPSPlan) => {
  const message = `
Hi! I am interested in purchasing the ${plan.name} plan:

RAM: ${plan.specs.RAM}
CPU: ${plan.specs.CPU}
Storage: ${plan.specs.Storage}
Location: ${plan.specs.Location || 'Multiple Locations'}
Price: $${plan.priceUSD}/month, Rs.${plan.priceINR}/month
${plan.specs.Bandwidth ? `Bandwidth: ${plan.specs.Bandwidth}` : ''}
${plan.specs.DailyGrowth ? `Daily Growth: ${plan.specs.DailyGrowth}` : ''}

Please provide payment details and setup instructions.
`.trim();

  // Only encode once
  const telegramUrl = `https://t.me/darky_underrated?text=${encodeURIComponent(
    message,
  )}`;
  window.open(telegramUrl, '_blank');
};

const decodeIfEncoded = (str: string) => {
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
};

const copyPlanDetails = (plan: VPSPlan, toast: any) => {
  const details = `
🖥️ ${plan.name}
💾 RAM: ${plan.specs.RAM}
⚡ CPU: ${plan.specs.CPU}
💿 Storage: ${plan.specs.Storage}
🌍 Location: ${plan.specs.Location || 'Multiple Locations'}
💰 Price: $${plan.priceUSD}/month (₹${plan.priceINR}/month)
${plan.specs.Bandwidth ? `📡 Bandwidth: ${plan.specs.Bandwidth}` : ''}
${plan.specs.DailyGrowth ? `📈 Daily Growth: ${plan.specs.DailyGrowth}` : ''}
${
  plan.specs.Renewable
    ? '🔄 Renewable: Yes (Same VPS monthly)'
    : '❌ Renewable: No (New VPS needed every month)'
}
✨ Features: ${plan.features.join(', ')}
  `.trim();

  navigator.clipboard.writeText(details);
  toast({
    title: 'Plan details copied!',
    description: 'Plan specifications have been copied to clipboard.',
  });
};

export default function HomePage() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>('normal');

  const getFilteredPlans = (category: string) => {
    switch (category) {
      case 'normal':
        return nonRenewablePlans;
      case 'renewable':
        return renewablePlans;
      case 'fat':
        return unifiedFATPlans;
      case 'expanding':
        return [...unifiedExpandingPlans, ...unlimitedExpandingPlans];
      case 'storage':
        return [
          ...storageVPSPlans,
          ...hybridSSDPlans,
          ...nvmeOffers,
          ...nvmeStoragePlans,
        ];
      case 'dedicated':
        return [...dedicatedCorePlans, ...dedicatedServerPlans];
      default:
        return allPlans;
    }
  };

  const filteredPlans = getFilteredPlans(selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Server className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SarthCloudX
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#plans"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Plans
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex space-x-2">
            {/* <Button variant="outline" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/register">Sign Up</Link>
            </Button> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Premium VPS & RDP Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Scalable, reliable, and powerful cloud infrastructure with full
              admin control. Choose from renewable and non-renewable plans with
              Telegram automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md rounded-full px-4 py-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md rounded-full px-4 py-2">
                <Zap className="h-5 w-5 text-yellow-600" />
                <span className="text-sm font-medium">Instant Setup</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md rounded-full px-4 py-2">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Global Locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Notice */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-blue-800 font-semibold">
              🚀 Preview Mode Active
            </p>
            <p className="text-blue-700 text-sm">
              This is a preview of SarthCloudX. MongoDB integration and Telegram
              notifications are configured but running in demo mode. All{' '}
              {allPlans.length}+ VPS/RDP plans are loaded and ready for
              production!
            </p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <section id="plans" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Choose Your Perfect Plan
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From basic VPS to enterprise dedicated servers, we have the right
              solution for your needs.
            </p>
          </div>

          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <div className="overflow-x-auto w-full">
              <TabsList
                className="flex flex-nowrap w-max mb-8 gap-1 md:grid md:grid-cols-6 md:w-full md:max-w-4xl md:mx-auto"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <TabsTrigger value="normal" className="flex-1 min-w-[120px]">
                  Non-Renewable
                </TabsTrigger>
                <TabsTrigger value="renewable" className="flex-1 min-w-[120px]">
                  Renewable
                </TabsTrigger>
                <TabsTrigger value="fat" className="flex-1 min-w-[120px]">
                  FAT Plans
                </TabsTrigger>
                <TabsTrigger value="expanding" className="flex-1 min-w-[120px]">
                  Expanding
                </TabsTrigger>
                <TabsTrigger value="storage" className="flex-1 min-w-[120px]">
                  Storage
                </TabsTrigger>
                <TabsTrigger value="dedicated" className="flex-1 min-w-[120px]">
                  Dedicated
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={selectedCategory} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
                {filteredPlans.map(plan => (
                  <Card
                    key={plan.id}
                    className="relative bg-white/70 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full max-w-xs"
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <div className="flex items-center justify-center mb-2">
                        {plan.category === 'dedicated' ? (
                          <Crown className="h-8 w-8 text-purple-600" />
                        ) : plan.category === 'renewable' ? (
                          <Zap className="h-8 w-8 text-green-600" />
                        ) : (
                          <Server className="h-8 w-8 text-blue-600" />
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {plan.name}
                      </CardTitle>
                      {plan.type && (
                        <Badge
                          variant="secondary"
                          className="w-fit mx-auto text-xs"
                        >
                          {plan.type}
                        </Badge>
                      )}
                      <CardDescription className="space-y-1">
                        <div className="text-2xl font-bold text-gray-900">
                          ${plan.priceUSD}
                          <span className="text-sm font-normal text-gray-600">
                            /month
                          </span>
                        </div>
                        <div className="text-lg font-semibold text-blue-600">
                          ₹{plan.priceINR}
                          <span className="text-xs font-normal text-gray-600">
                            /month
                          </span>
                        </div>
                        {plan.originalPriceUSD && (
                          <div className="text-sm text-gray-500 line-through">
                            ${plan.originalPriceUSD} (₹{plan.originalPriceINR})
                          </div>
                        )}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">RAM:</span>
                          <span className="font-medium">{plan.specs.RAM}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">CPU:</span>
                          <span className="font-medium text-xs">
                            {plan.specs.CPU}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Storage:</span>
                          <span className="font-medium text-xs">
                            {plan.specs.Storage}
                          </span>
                        </div>
                        {plan.specs.Bandwidth && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bandwidth:</span>
                            <span className="font-medium text-xs">
                              {plan.specs.Bandwidth}
                            </span>
                          </div>
                        )}
                        {plan.specs.DailyGrowth && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Daily Growth:</span>
                            <span className="font-medium text-xs text-green-600">
                              {plan.specs.DailyGrowth}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600">Renewable:</span>
                          <span
                            className={`font-medium text-xs ${
                              plan.specs.Renewable
                                ? 'text-green-600'
                                : 'text-red-600'
                            }`}
                          >
                            {plan.specs.Renewable ? '✅ Yes' : '❌ No'}
                          </span>
                        </div>
                      </div>

                      {plan.note && (
                        <div className="text-xs text-green-600 bg-green-50 p-2 rounded">
                          {plan.note}
                        </div>
                      )}

                      <div className="pt-3 border-t">
                        <p className="text-xs text-gray-600 mb-2">Features:</p>
                        <div className="space-y-1">
                          {plan.features.slice(0, 3).map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center text-xs"
                            >
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                          {plan.features.length > 3 && (
                            <div className="text-xs text-gray-500">
                              +{plan.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-col space-y-2 pt-4">
                      <Button
                        onClick={() => buyViaTelegram(plan)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Buy via Telegram
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => copyPlanDetails(plan, toast)}
                        className="w-full"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Server className="h-6 w-6" />
                <span className="text-xl font-bold">SarthCloudX</span>
              </div>
              <p className="text-gray-400 text-sm">
                Premium VPS & RDP solutions with full admin control and
                automation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    VPS Hosting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    RDP Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Dedicated Servers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms#refund-policy"
                    className="hover:text-white transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Telegram: @sarthcloudx_bot</p>
                <p>24/7 Support Available</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 SarthCloudX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
