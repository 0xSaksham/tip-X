# TipX  

TipX is a decentralized social tipping platform integrated with X (formerly Twitter) that allows users to seamlessly send and claim cryptocurrency tips using Ethereum-based smart contracts. With an intuitive interface and secure transactions, TipX empowers content creators and community members to reward and support each other directly.  

## Table of Contents  
- [Motivation](#motivation)  
- [Features](#features)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [Code of Conduct](#code-of-conduct)  
- [Support](#support)  
- [License](#license)  

## Motivation  
In today’s digital landscape, creators and contributors often seek recognition and support for their work. TipX bridges this gap by providing a secure, decentralized platform for cryptocurrency tipping, fostering community engagement, and rewarding valuable contributions.  

## Features  
- **Easy Tipping**: Send tips using simple commands like `@user !tip amount currency` directly on X.  
- **Claim Tips**: Recipients can claim their tips through a user-friendly web interface.  
- **Secure Transactions**: Powered by Solidity smart contracts deployed on the Ethereum blockchain, ensuring transparency and trust.  
- **Integration with X**: Directly connect your X account to TipX for seamless interaction.  
- **Decentralized Infrastructure**: Built using Ethereum’s Base Layer 2 chain for scalability and efficiency.  

## Getting Started  
To get started with TipX, follow these steps:  

### Prerequisites  
Ensure you have the following installed:  
- Node.js  
- npm or yarn  
- MetaMask or any Ethereum-compatible wallet  

### Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/tipx.git  
   cd tipx  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Configure environment variables in a `.env` file:  
   ```plaintext  
   INFURA_API_KEY=your_infura_api_key  
   PRIVATE_KEY=your_wallet_private_key  
   NETWORK=goerli  
   ```  

4. Deploy the smart contracts to the Ethereum testnet:  
   ```bash  
   npx hardhat run scripts/deploy.js --network goerli  
   ```  

### Frontend Setup  
1. Navigate to the frontend directory:  
   ```bash  
   cd frontend  
   ```  
2. Install frontend dependencies:  
   ```bash  
   npm install  
   ```  
3. Start the development server:  
   ```bash  
   npm start  
   ```  

## Usage  
1. Authenticate with your X account.  
2. Send cryptocurrency tips using the `@user !tip amount currency` command.  
3. Claim received tips by visiting the TipX web portal and connecting your wallet.  

## Contributing  
We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.  

## Code of Conduct  
By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.  

## Support  
If you have any questions or need assistance, please open an issue in this repository or reach out via our community channels.  

## License  
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.  

Thank you for your interest in TipX! Together, we can create a vibrant, decentralized community that supports and rewards creativity.  
