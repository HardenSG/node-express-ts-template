// https://blog.csdn.net/zz00008888/article/details/113738025
// pm2 自动部署
{
  apps: [
    {
      name: 'SG_life_blog',
      script: 'npm',
      args: 'run serve',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ]
}
