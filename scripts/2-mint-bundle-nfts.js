import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = '0x7a4C123d511508bAe1B7F8B526Df7Cc1Af2D824C';
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log('Creating NFT batch...');

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: 'Cars1',
        description: 'JZX90 and E30',
        image: readFileSync('./assets/nft1.jpg'),
        properties: {
          make: 'Toyota',
          model: 'JZX90',  
          rarity: 'super rare',
          fanciness: 10,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'Cars2',
        description: 'White JZX90 Mark II',
        image: readFileSync('./assets/nft2.jpg'),
        properties: {
          make: 'Toyota',
          model: 'JZX90',   
          rarity: 'Very rare',
          fanciness: 7,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'Cars3',
        description: 'Nissan Cefiro Autech',
        image: readFileSync('./assets/nft3.jpg'),
        properties: {
          make: 'Nissan',
          model: 'Cefiro',              
          rarity: 'Very rare!',
          fanciness: 8,
        }
      },
      supply: 50,
    },
    {
        metadata: {
          name: 'Cars4',
          description: 'Nissan Cefiro Autech',
          image: readFileSync('./assets/nft4.jpg'),
          properties: {
            make: 'Nissan',
            model: 'Cefiro',              
            rarity: 'Very rare!',
            fanciness: 8,
          }
        },
        supply: 50,
    },
    {
        metadata: {
        name: 'Cars5',
        description: 'Lexus SC300 Drift',
        image: readFileSync('./assets/nft5.jpg'),
        properties: {
            make: 'Lexus',
            model: 'SC300',              
            rarity: 'Rare!',
            fanciness: 6,
        }
        },
        supply: 50,
    },
    {
        metadata: {
        name: 'Cars6',
        description: 'Lexus SC300 Drift',
        image: readFileSync('./assets/nft6.jpg'),
        properties: {
            make: 'Lexus',
            model: 'SC300',              
            rarity: 'Rare!',
            fanciness: 6,
        }
        },
        supply: 50,
    }
  ]);

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}