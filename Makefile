dev:
	cd frontend && npm run dev

build:
	cd frontend && npm run build

contract-build:
	cd backend/contracts && forge build

contract-deploy:
	cd backend/contracts && forge script scripts/deploy.js --rpc-url http://localhost:8545 --broadcast

contract-test:
	cd backend/contracts && forge test
