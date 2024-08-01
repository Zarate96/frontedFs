echo "Switching to the master branch"
git checkout master

echo "Building the project"
npm run build

echo "Deploying the project"
scp -r dist/* hzcode@74.208.98.114:/var/www/74.208.98.114

echo "Deployment complete"