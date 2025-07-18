import type { VPSPlan } from './types';

// Helper function to increase USD prices by $3
function increaseUSD<T extends VPSPlan>(plans: T[]): T[] {
  return plans.map(plan => ({
    ...plan,
    priceUSD: plan.priceUSD + 3,
    originalPriceUSD: plan.originalPriceUSD
      ? plan.originalPriceUSD + 3
      : undefined,
  }));
}

export const nonRenewablePlans: VPSPlan[] = [
  {
    id: 'best-buy-do1',
    name: 'Best Buy DO1',
    category: 'normal',
    specs: {
      RAM: '8GB',
      CPU: 'Premium Ryzen Processor (4 Cores)',
      Storage: '160GB',
      Location:
        'New York, San Francisco, Amsterdam, Singapore, London, Frankfurt, Toronto, Bangalore, Sydney',
      Bandwidth: '5TB',
      Warranty: '15 Days',
      Validity: '30 Days',
      Renewable: false,
    },
    priceUSD: 4.2,
    priceINR: 350,
    originalPriceUSD: 5.6,
    originalPriceINR: 500,
    features: [
      'Premium Ryzen Processor',
      '5TB Bandwidth',
      '15 Days Warranty',
      'Multiple Locations',
    ],
  },
  {
    id: 'ott-friendly-np1',
    name: 'OTT Friendly NP1',
    category: 'normal',
    specs: {
      RAM: '8GB',
      CPU: 'Ryzen H-Series (4 Cores)',
      Storage: '256GB',
      Location: 'USA',
      Bandwidth: 'Unlimited',
      Warranty: '15 Days',
      Validity: '30 Days',
      Renewable: false,
    },
    priceUSD: 5,
    priceINR: 450,
    originalPriceUSD: 7.5,
    originalPriceINR: 675,
    features: [
      'OTT Platforms Work',
      'Unlimited Bandwidth',
      'User Feedback Verified',
      '15 Days Warranty',
    ],
    note: '✅ OTT platforms work (user feedback)',
  },
  {
    id: 'best-choice-np2',
    name: 'Best Choice NP2',
    category: 'normal',
    specs: {
      RAM: '16GB',
      CPU: 'Premium Ryzen Processor (8 Cores)',
      Storage: '512GB',
      Location: 'USA',
      Bandwidth: 'Unlimited',
      Warranty: '15 Days',
      Validity: '30 Days',
      Renewable: false,
    },
    priceUSD: 14.5,
    priceINR: 1280,
    originalPriceUSD: 25,
    originalPriceINR: 2250,
    features: [
      'Premium 8-Core Processor',
      'Unlimited Bandwidth',
      'OTT Platforms Work',
      '15 Days Warranty',
    ],
    isPopular: true,
    note: '✅ OTT platforms work (user feedback)',
  },
];

export const renewablePlans: VPSPlan[] = increaseUSD([
  {
    id: 'premium-usa-sr2',
    name: 'Premium USA Plan SR2',
    category: 'renewable',
    specs: {
      RAM: '16GB',
      CPU: 'Premium Intel Processor (4 Cores)',
      Storage: '500GB',
      Location: 'Canada',
      Bandwidth: 'Unlimited',
      Warranty: '30 Days',
      Validity: '30 Days',
      Renewable: true,
    },
    priceUSD: 15,
    priceINR: 1350,
    originalPriceUSD: 18,
    originalPriceINR: 1720,
    features: [
      'Same VPS Monthly',
      'Premium Intel Processor',
      'Unlimited Bandwidth',
      '30 Days Warranty',
    ],
  },
  {
    id: 'high-performance-sr2',
    name: 'High Performance SR2',
    category: 'renewable',
    specs: {
      RAM: '32GB',
      CPU: 'Ryzen Processor (8 Cores)',
      Storage: '1000GB NVMe',
      Location: 'Canada',
      Bandwidth: 'Unlimited',
      Warranty: '30 Days',
      Validity: '30 Days',
      Renewable: true,
    },
    priceUSD: 20,
    priceINR: 1800,
    originalPriceUSD: 23,
    originalPriceINR: 1890,
    features: [
      'Same VPS Monthly',
      'High Performance NVMe',
      '8-Core Ryzen',
      '30 Days Warranty',
    ],
  },
]);

export const unifiedFATPlans: VPSPlan[] = increaseUSD([
  {
    id: 'fat-1-4-250',
    name: 'FAT Plan 1/4/250',
    category: 'renewable',
    type: 'Unified FAT',
    specs: {
      RAM: '4GB',
      CPU: '1 vCPU',
      Storage: '250GB NVMe',
      Bandwidth: '4TB',
      Renewable: true,
    },
    priceUSD: 7,
    priceINR: 580,
    originalPriceUSD: 4,
    originalPriceINR: 330,
    features: [
      'NVMe Storage',
      '4TB Bandwidth',
      'Renewable Plan',
      'High Performance',
    ],
  },
  {
    id: 'fat-2-8-500',
    name: 'FAT Plan 2/8/500',
    category: 'renewable',
    type: 'Unified FAT',
    specs: {
      RAM: '8GB',
      CPU: '2 vCPU',
      Storage: '500GB NVMe',
      Bandwidth: '8TB',
      Renewable: true,
    },
    priceUSD: 9,
    priceINR: 750,
    originalPriceUSD: 6,
    originalPriceINR: 500,
    features: [
      'NVMe Storage',
      '8TB Bandwidth',
      'Renewable Plan',
      'High Performance',
    ],
  },
  {
    id: 'fat-4-16-1tb',
    name: 'FAT Plan 4/16/1TB',
    category: 'renewable',
    type: 'Unified FAT',
    specs: {
      RAM: '16GB',
      CPU: '4 vCPU',
      Storage: '1TB NVMe',
      Bandwidth: '16TB',
      Renewable: true,
    },
    priceUSD: 14,
    priceINR: 1160,
    originalPriceUSD: 10,
    originalPriceINR: 830,
    features: [
      '1TB NVMe Storage',
      '16TB Bandwidth',
      'Renewable Plan',
      'High Performance',
    ],
    isPopular: true,
  },
  {
    id: 'fat-8-32-2tb',
    name: 'FAT Plan 8/32/2TB',
    category: 'renewable',
    type: 'Unified FAT',
    specs: {
      RAM: '32GB',
      CPU: '8 vCPU',
      Storage: '2TB NVMe',
      Bandwidth: '32TB',
      Renewable: true,
    },
    priceUSD: 22,
    priceINR: 1830,
    originalPriceUSD: 18,
    originalPriceINR: 1500,
    features: [
      '2TB NVMe Storage',
      '32TB Bandwidth',
      'Renewable Plan',
      'High Performance',
    ],
  },
  {
    id: 'fat-16-64-4tb',
    name: 'FAT Plan 16/64/4TB',
    category: 'renewable',
    type: 'Unified FAT',
    specs: {
      RAM: '64GB',
      CPU: '16 vCPU',
      Storage: '4TB NVMe',
      Bandwidth: '64TB',
      Renewable: true,
    },
    priceUSD: 39,
    priceINR: 3250,
    originalPriceUSD: 34,
    originalPriceINR: 2830,
    features: [
      '4TB NVMe Storage',
      '64TB Bandwidth',
      'Renewable Plan',
      'Enterprise Grade',
    ],
  },
  {
    id: 'fat-32-128-8tb',
    name: 'FAT Plan 32/128/8TB',
    category: 'renewable',
    type: 'Unified FAT',
    specs: {
      RAM: '128GB',
      CPU: '32 vCPU',
      Storage: '8TB NVMe',
      Bandwidth: '128TB',
      Renewable: true,
    },
    priceUSD: 72,
    priceINR: 6000,
    originalPriceUSD: 66,
    originalPriceINR: 5500,
    features: [
      '8TB NVMe Storage',
      '128TB Bandwidth',
      'Renewable Plan',
      'Enterprise Grade',
    ],
  },
]);

export const unifiedExpandingPlans: VPSPlan[] = increaseUSD([
  {
    id: 'expanding-1-4-125',
    name: 'Expanding 1/4/125+1GB',
    category: 'renewable',
    type: 'Unified Expanding',
    specs: {
      RAM: '4GB',
      CPU: '1 vCPU',
      Storage: '125GB NVMe + 500GB SAN',
      DailyGrowth: '1GB/day',
      Bandwidth: '4TB',
      Renewable: true,
    },
    priceUSD: 10,
    priceINR: 830,
    originalPriceUSD: 6.5,
    originalPriceINR: 540,
    features: [
      'Daily Storage Growth',
      'NVMe + SAN Storage',
      '4TB Bandwidth',
      'Expanding Plan',
    ],
  },
  {
    id: 'expanding-2-8-250',
    name: 'Expanding 2/8/250+1GB',
    category: 'renewable',
    type: 'Unified Expanding',
    specs: {
      RAM: '8GB',
      CPU: '2 vCPU',
      Storage: '250GB NVMe + 500GB SAN',
      DailyGrowth: '1GB/day',
      Bandwidth: '8TB',
      Renewable: true,
    },
    priceUSD: 12,
    priceINR: 1000,
    originalPriceUSD: 8,
    originalPriceINR: 660,
    features: [
      'Daily Storage Growth',
      'NVMe + SAN Storage',
      '8TB Bandwidth',
      'Expanding Plan',
    ],
  },
  {
    id: 'expanding-4-16-500',
    name: 'Expanding 4/16/500+1GB',
    category: 'renewable',
    type: 'Unified Expanding',
    specs: {
      RAM: '16GB',
      CPU: '4 vCPU',
      Storage: '500GB NVMe + 500GB SAN',
      DailyGrowth: '1GB/day',
      Bandwidth: '16TB',
      Renewable: true,
    },
    priceUSD: 15,
    priceINR: 1250,
    originalPriceUSD: 11,
    originalPriceINR: 910,
    features: [
      'Daily Storage Growth',
      'NVMe + SAN Storage',
      '16TB Bandwidth',
      'Expanding Plan',
    ],
    isPopular: true,
  },
  {
    id: 'expanding-8-32-1tb',
    name: 'Expanding 8/32/1TB+1GB',
    category: 'renewable',
    type: 'Unified Expanding',
    specs: {
      RAM: '32GB',
      CPU: '8 vCPU',
      Storage: '1TB NVMe + 500GB SAN',
      DailyGrowth: '1GB/day',
      Bandwidth: '32TB',
      Renewable: true,
    },
    priceUSD: 22,
    priceINR: 1830,
    originalPriceUSD: 17,
    originalPriceINR: 1410,
    features: [
      'Daily Storage Growth',
      'NVMe + SAN Storage',
      '32TB Bandwidth',
      'Expanding Plan',
    ],
  },
  {
    id: 'expanding-16-64-2tb',
    name: 'Expanding 16/64/2TB+1GB',
    category: 'renewable',
    type: 'Unified Expanding',
    specs: {
      RAM: '64GB',
      CPU: '16 vCPU',
      Storage: '2TB NVMe + 500GB SAN',
      DailyGrowth: '1GB/day',
      Bandwidth: '64TB',
      Renewable: true,
    },
    priceUSD: 35,
    priceINR: 2910,
    originalPriceUSD: 29,
    originalPriceINR: 2410,
    features: [
      'Daily Storage Growth',
      'NVMe + SAN Storage',
      '64TB Bandwidth',
      'Enterprise Grade',
    ],
  },
  {
    id: 'expanding-32-128-4tb',
    name: 'Expanding 32/128/4TB+1GB',
    category: 'renewable',
    type: 'Unified Expanding',
    specs: {
      RAM: '128GB',
      CPU: '32 vCPU',
      Storage: '4TB NVMe + 500GB SAN',
      DailyGrowth: '1GB/day',
      Bandwidth: '128TB',
      Renewable: true,
    },
    priceUSD: 59,
    priceINR: 4910,
    originalPriceUSD: 53,
    originalPriceINR: 4410,
    features: [
      'Daily Storage Growth',
      'NVMe + SAN Storage',
      '128TB Bandwidth',
      'Enterprise Grade',
    ],
  },
]);

export const storageVPSPlans: VPSPlan[] = increaseUSD([
  {
    id: 'opossum-1-storage',
    name: 'Opossum 1 Storage',
    category: 'renewable',
    type: 'Storage VPS',
    specs: {
      RAM: '1GB',
      CPU: '1 vCPU',
      Storage: '1TB HDD (RaidZ2)',
      Bandwidth: '12TB @ 1Gbps',
      DiskType: 'HDD (RaidZ2)',
      Renewable: true,
    },
    priceUSD: 33,
    priceINR: 2750,
    originalPriceUSD: 29,
    originalPriceINR: 2410,
    features: [
      '1TB HDD Storage',
      'RaidZ2 Protection',
      '12TB Bandwidth',
      'Storage Optimized',
    ],
  },
  {
    id: 'opossum-2-storage',
    name: 'Opossum 2 Storage',
    category: 'renewable',
    type: 'Storage VPS',
    specs: {
      RAM: '2GB',
      CPU: '2 vCPU',
      Storage: '1TB HDD (RaidZ2)',
      Bandwidth: '12TB @ 1Gbps',
      DiskType: 'HDD (RaidZ2)',
      Renewable: true,
    },
    priceUSD: 41,
    priceINR: 3410,
    originalPriceUSD: 36,
    originalPriceINR: 3000,
    features: [
      '1TB HDD Storage',
      'RaidZ2 Protection',
      '12TB Bandwidth',
      'Storage Optimized',
    ],
  },
  {
    id: 'polar-bear-storage',
    name: 'Polar Bear Storage',
    category: 'renewable',
    type: 'Storage VPS',
    specs: {
      RAM: '2GB',
      CPU: '2 vCPU',
      Storage: '2TB HDD (RaidZ2)',
      Bandwidth: '12TB @ 1Gbps',
      DiskType: 'HDD (RaidZ2)',
      Renewable: true,
    },
    priceUSD: 9,
    priceINR: 750,
    originalPriceUSD: 5,
    originalPriceINR: 410,
    features: [
      '2TB HDD Storage',
      'RaidZ2 Protection',
      '12TB Bandwidth',
      'Best Value',
    ],
    isPopular: true,
  },
  {
    id: 'killer-whale-storage',
    name: 'Killer Whale Storage',
    category: 'renewable',
    type: 'Storage VPS',
    specs: {
      RAM: '2GB',
      CPU: '2 vCPU',
      Storage: '3.5TB HDD (RaidZ2)',
      Bandwidth: '18TB @ 1Gbps',
      DiskType: 'HDD (RaidZ2)',
      Renewable: true,
    },
    priceUSD: 13,
    priceINR: 1080,
    originalPriceUSD: 8.5,
    originalPriceINR: 710,
    features: [
      '3.5TB HDD Storage',
      'RaidZ2 Protection',
      '18TB Bandwidth',
      'High Capacity',
    ],
  },
  {
    id: 'mammoth-storage',
    name: 'Mammoth Storage',
    category: 'renewable',
    type: 'Storage VPS',
    specs: {
      RAM: '8GB',
      CPU: '4 vCPU',
      Storage: '8TB HDD (RaidZ2)',
      Bandwidth: '24TB @ 1Gbps',
      DiskType: 'HDD (RaidZ2)',
      Renewable: true,
    },
    priceUSD: 25,
    priceINR: 2080,
    originalPriceUSD: 20,
    originalPriceINR: 1660,
    features: [
      '8TB HDD Storage',
      'RaidZ2 Protection',
      '24TB Bandwidth',
      'Enterprise Storage',
    ],
  },
  {
    id: 'penguin-storage',
    name: 'Penguin Storage',
    category: 'renewable',
    type: 'Storage VPS',
    specs: {
      RAM: '6GB',
      CPU: '4 vCPU',
      Storage: '3TB HDD (RaidZ2)',
      Bandwidth: '6TB @ 1Gbps',
      DiskType: 'HDD (RaidZ2)',
      Renewable: true,
    },
    priceUSD: 15,
    priceINR: 1250,
    originalPriceUSD: 11.11,
    originalPriceINR: 920,
    features: [
      '3TB HDD Storage',
      'RaidZ2 Protection',
      '6TB Bandwidth',
      'Balanced Storage',
    ],
  },
  {
    id: 'horse-storage',
    name: 'Horse Storage',
    category: 'renewable',
    type: 'Storage VPS',
    specs: {
      RAM: '3GB',
      CPU: '3 vCPU',
      Storage: '3TB HDD (RaidZ2)',
      Bandwidth: '12TB @ 1Gbps',
      DiskType: 'HDD (RaidZ2)',
      Renewable: true,
    },
    priceUSD: 14,
    priceINR: 1160,
    originalPriceUSD: 10,
    originalPriceINR: 830,
    features: [
      '3TB HDD Storage',
      'RaidZ2 Protection',
      '12TB Bandwidth',
      'Mid-Range Storage',
    ],
  },
]);

export const hybridSSDPlans: VPSPlan[] = increaseUSD([
  {
    id: 'chameleon-hybrid-ssd',
    name: 'Chameleon Hybrid SSD',
    category: 'renewable',
    type: 'Hybrid SSD',
    specs: {
      RAM: '3GB',
      CPU: '2 vCPU',
      Storage: '100GB SSD + 2TB HDD',
      Bandwidth: '12TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 11,
    priceINR: 910,
    originalPriceUSD: 7,
    originalPriceINR: 580,
    features: [
      'Hybrid SSD+HDD',
      'Fast Boot Drive',
      'Large Storage',
      '12TB Bandwidth',
    ],
  },
  {
    id: 'salamander-hybrid-ssd',
    name: 'Salamander Hybrid SSD',
    category: 'renewable',
    type: 'Hybrid SSD',
    specs: {
      RAM: '4GB',
      CPU: '4 vCPU',
      Storage: '200GB SSD + 4TB HDD',
      Bandwidth: '18TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 20,
    priceINR: 1660,
    originalPriceUSD: 15,
    originalPriceINR: 1250,
    features: [
      'Hybrid SSD+HDD',
      'Fast Boot Drive',
      'Large Storage',
      '18TB Bandwidth',
    ],
    isPopular: true,
  },
]);

export const nvmeOffers: VPSPlan[] = increaseUSD([
  {
    id: 'nvme-cub',
    name: 'NVMe Cub',
    category: 'renewable',
    type: 'NVMe Offers',
    specs: {
      RAM: '4GB',
      CPU: '2 vCPU',
      Storage: '40GB NVMe',
      Bandwidth: '4TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 9,
    priceINR: 750,
    originalPriceUSD: 5,
    originalPriceINR: 410,
    features: [
      'Ultra-Fast NVMe',
      'High IOPS',
      '4TB Bandwidth',
      'Performance Optimized',
    ],
  },
  {
    id: 'nvme-cheetah',
    name: 'NVMe Cheetah',
    category: 'renewable',
    type: 'NVMe Offers',
    specs: {
      RAM: '6GB',
      CPU: '4 vCPU',
      Storage: '80GB NVMe',
      Bandwidth: '12TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 11,
    priceINR: 910,
    originalPriceUSD: 7,
    originalPriceINR: 580,
    features: [
      'Ultra-Fast NVMe',
      'High IOPS',
      '12TB Bandwidth',
      'Performance Optimized',
    ],
    isPopular: true,
  },
  {
    id: 'nvme-tiger',
    name: 'NVMe Tiger',
    category: 'renewable',
    type: 'NVMe Offers',
    specs: {
      RAM: '10GB',
      CPU: '4 vCPU',
      Storage: '150GB NVMe',
      Bandwidth: '12TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 15,
    priceINR: 1250,
    originalPriceUSD: 10,
    originalPriceINR: 830,
    features: [
      'Ultra-Fast NVMe',
      'High IOPS',
      '12TB Bandwidth',
      'High Performance',
    ],
  },
]);

export const nvmeStoragePlans: VPSPlan[] = increaseUSD([
  {
    id: 'wildebeest-nvme-storage-1',
    name: 'Wildebeest NVMe Storage 1',
    category: 'renewable',
    type: 'NVMe Storage',
    specs: {
      RAM: '3GB',
      CPU: '2 vCPU',
      Storage: '0.25TB NVMe',
      Bandwidth: '12TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 9,
    priceINR: 750,
    originalPriceUSD: 5,
    originalPriceINR: 410,
    features: [
      'Pure NVMe Storage',
      'Ultra-Fast Performance',
      '12TB Bandwidth',
      'Storage Optimized',
    ],
  },
  {
    id: 'wildebeest-nvme-storage-2',
    name: 'Wildebeest NVMe Storage 2',
    category: 'renewable',
    type: 'NVMe Storage',
    specs: {
      RAM: '6GB',
      CPU: '4 vCPU',
      Storage: '0.5TB NVMe',
      Bandwidth: '24TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 15,
    priceINR: 1250,
    originalPriceUSD: 10,
    originalPriceINR: 830,
    features: [
      'Pure NVMe Storage',
      'Ultra-Fast Performance',
      '24TB Bandwidth',
      'Storage Optimized',
    ],
    isPopular: true,
  },
  {
    id: 'swordfish-nvme-storage-1',
    name: 'Swordfish NVMe Storage 1',
    category: 'renewable',
    type: 'NVMe Storage',
    specs: {
      RAM: '3GB',
      CPU: '4 vCPU',
      Storage: '0.4TB NVMe',
      Bandwidth: '12TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 11,
    priceINR: 910,
    originalPriceUSD: 7,
    originalPriceINR: 580,
    features: [
      'Pure NVMe Storage',
      'Ultra-Fast Performance',
      '12TB Bandwidth',
      'High Performance',
    ],
  },
  {
    id: 'swordfish-nvme-storage-2',
    name: 'Swordfish NVMe Storage 2',
    category: 'renewable',
    type: 'NVMe Storage',
    specs: {
      RAM: '12GB',
      CPU: '4 vCPU',
      Storage: '1.2TB NVMe',
      Bandwidth: '24TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 26,
    priceINR: 2160,
    originalPriceUSD: 21,
    originalPriceINR: 1750,
    features: [
      'Pure NVMe Storage',
      'Ultra-Fast Performance',
      '24TB Bandwidth',
      'Enterprise Grade',
    ],
  },
]);

export const dedicatedCorePlans: VPSPlan[] = increaseUSD([
  {
    id: 'octopus-vds1',
    name: 'Octopus VDS1',
    category: 'renewable',
    type: 'Dedicated Core',
    specs: {
      RAM: '8GB',
      CPU: '2 Dedicated Cores',
      Storage: '70GB',
      Bandwidth: '12TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 12,
    priceINR: 1000,
    originalPriceUSD: 8,
    originalPriceINR: 660,
    features: [
      'Dedicated CPU Cores',
      'Guaranteed Resources',
      '12TB Bandwidth',
      'High Performance',
    ],
  },
  {
    id: 'octopus-vds2',
    name: 'Octopus VDS2',
    category: 'renewable',
    type: 'Dedicated Core',
    specs: {
      RAM: '16GB',
      CPU: '4 Dedicated Cores',
      Storage: '150GB',
      Bandwidth: '24TB @ 1Gbps',
      Renewable: true,
    },
    priceUSD: 20,
    priceINR: 1660,
    originalPriceUSD: 15,
    originalPriceINR: 1250,
    features: [
      'Dedicated CPU Cores',
      'Guaranteed Resources',
      '24TB Bandwidth',
      'Enterprise Grade',
    ],
    isPopular: true,
  },
]);

export const unlimitedExpandingPlans: VPSPlan[] = increaseUSD([
  {
    id: 'shrimp-1',
    name: 'Shrimp 1',
    category: 'renewable',
    type: 'Unlimited Expanding',
    specs: {
      RAM: '2GB',
      CPU: '2 vCPU',
      Storage: '500GB + 1GB/day',
      Bandwidth: '12TB @ 1Gbps',
      DailyGrowth: '1GB/day',
      Renewable: true,
    },
    priceUSD: 9,
    priceINR: 750,
    originalPriceUSD: 5,
    originalPriceINR: 410,
    features: [
      'Daily Storage Growth',
      'Unlimited Expansion',
      '12TB Bandwidth',
      'Growing Storage',
    ],
  },
  {
    id: 'shrimp-2',
    name: 'Shrimp 2',
    category: 'renewable',
    type: 'Unlimited Expanding',
    specs: {
      RAM: '2GB',
      CPU: '2 vCPU',
      Storage: '500GB + 2GB/day',
      Bandwidth: '12TB @ 1Gbps',
      DailyGrowth: '2GB/day',
      Renewable: true,
    },
    priceUSD: 11,
    priceINR: 910,
    originalPriceUSD: 7,
    originalPriceINR: 580,
    features: [
      'Daily Storage Growth',
      'Unlimited Expansion',
      '12TB Bandwidth',
      'Fast Growing Storage',
    ],
    isPopular: true,
  },
  {
    id: 'lobster',
    name: 'Lobster',
    category: 'renewable',
    type: 'Unlimited Expanding',
    specs: {
      RAM: '3GB',
      CPU: '4 vCPU',
      Storage: '2TB + 3GB/day',
      Bandwidth: '18TB @ 1Gbps',
      DailyGrowth: '3GB/day',
      Renewable: true,
    },
    priceUSD: 15,
    priceINR: 1250,
    originalPriceUSD: 10,
    originalPriceINR: 830,
    features: [
      'Daily Storage Growth',
      'Unlimited Expansion',
      '18TB Bandwidth',
      'Premium Growing Storage',
    ],
  },
]);

export const dedicatedServerPlans: VPSPlan[] = increaseUSD([
  {
    id: 'baboon-server-e5-2650',
    name: 'Baboon Server E5-2650',
    category: 'dedicated',
    type: 'Dedicated Server',
    specs: {
      RAM: '256GB DDR3',
      CPU: '2x E5-2650 v2 (16 Cores)',
      Storage: '2x120GB + 2x12TB',
      Bandwidth: '1Gbps Unlimited',
      Renewable: true,
    },
    priceUSD: 74,
    priceINR: 6160,
    originalPriceUSD: 69,
    originalPriceINR: 5750,
    features: [
      'Dedicated Hardware',
      '256GB RAM',
      'Dual E5-2650 v2',
      'Unlimited Bandwidth',
    ],
  },
  {
    id: 'baboon-server-e5-2697-v2',
    name: 'Baboon Server E5-2697 V2',
    category: 'dedicated',
    type: 'Dedicated Server',
    specs: {
      RAM: '256GB DDR3',
      CPU: '2x E5-2697 V2 (24 Cores)',
      Storage: '2x120GB + 2x12TB',
      Bandwidth: '1Gbps Unlimited',
      Renewable: true,
    },
    priceUSD: 85,
    priceINR: 7080,
    originalPriceUSD: 79,
    originalPriceINR: 6580,
    features: [
      'Dedicated Hardware',
      '256GB RAM',
      'Dual E5-2697 V2',
      'Unlimited Bandwidth',
    ],
    isPopular: true,
  },
  {
    id: 'epyc-greyhound-dedicated',
    name: 'EPYC Greyhound Dedicated',
    category: 'dedicated',
    type: 'Dedicated Server',
    specs: {
      RAM: '128GB DDR4',
      CPU: 'AMD EPYC 7551P (32 Cores)',
      Storage: '3.2TB NVMe',
      Bandwidth: '10Gbps 100TB',
      Renewable: true,
    },
    priceUSD: 80,
    priceINR: 6660,
    originalPriceUSD: 75,
    originalPriceINR: 6250,
    features: [
      'AMD EPYC Processor',
      '128GB DDR4',
      '3.2TB NVMe',
      '10Gbps Connection',
    ],
  },
  {
    id: 'epyc-greyhound-20tb',
    name: 'EPYC Greyhound 20TB',
    category: 'dedicated',
    type: 'Dedicated Server',
    specs: {
      RAM: '128GB DDR4',
      CPU: 'AMD EPYC 7551P (32 Cores)',
      Storage: '3.2TB NVMe + 20TB HDD',
      Bandwidth: '10Gbps 100TB',
      Renewable: true,
    },
    priceUSD: 94,
    priceINR: 7830,
    originalPriceUSD: 89,
    originalPriceINR: 7410,
    features: [
      'AMD EPYC Processor',
      '128GB DDR4',
      '3.2TB NVMe + 20TB HDD',
      '10Gbps Connection',
    ],
  },
  {
    id: 'xen-dedicated-server',
    name: 'Xen Dedicated Server',
    category: 'dedicated',
    type: 'Dedicated Server',
    specs: {
      RAM: '256GB DDR3',
      CPU: '2x E5-2650 v2 (16 Cores)',
      Storage: '1x500GB SSD',
      Bandwidth: '500Mbps',
      Renewable: true,
    },
    priceUSD: 54,
    priceINR: 4500,
    originalPriceUSD: 49,
    originalPriceINR: 4080,
    features: [
      'Dedicated Hardware',
      '256GB RAM',
      '500GB SSD',
      'Xen Virtualization',
    ],
  },
]);

// Combine all plans
export const allPlans: VPSPlan[] = [
  ...nonRenewablePlans,
  ...renewablePlans,
  ...unifiedFATPlans,
  ...unifiedExpandingPlans,
  ...storageVPSPlans,
  ...hybridSSDPlans,
  ...nvmeOffers,
  ...nvmeStoragePlans,
  ...dedicatedCorePlans,
  ...unlimitedExpandingPlans,
  ...dedicatedServerPlans,
];
