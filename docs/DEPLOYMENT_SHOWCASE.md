# Deployment Showcase

## Live Deployments

### Production Deployment
**URL**: Coming soon (pending deployment)  
**Environment**: Production  
**Hosting**: Vercel / Netlify (recommended)  
**Status**: ⚙️ Ready to deploy

### Demo Deployment
**URL**: Coming soon  
**Environment**: Staging  
**Hosting**: GitHub Pages / Vercel Preview  
**Status**: ⚙️ Ready to deploy

## Deployment Options

Polkational is designed to be deployed effortlessly on multiple platforms. Below are the recommended options:

### Option 1: Vercel (Recommended)
**Pros**: Zero-config, excellent performance, automatic HTTPS, global CDN  
**Cost**: Free tier sufficient for educational projects

```bash
# Deploy to Vercel
npm install -g vercel
vercel
```

**Configuration** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "routes": [
    { "src": "/assets/(.*)", "headers": { "cache-control": "max-age=31536000" } },
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### Option 2: Netlify
**Pros**: Simple deployment, build hooks, form handling, serverless functions  
**Cost**: Free tier sufficient

```bash
# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod
```

**Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Option 3: GitHub Pages
**Pros**: Free, integrated with GitHub, simple workflow  
**Cost**: Free

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 4: Docker (Self-hosted)
**Pros**: Full control, consistent environments, works anywhere  
**Cost**: Hosting costs apply

```bash
# Build and run Docker container
docker build -t polkational .
docker run -d -p 80:80 polkational
```

**Production Dockerfile** (already included):
```dockerfile
# Multi-stage build for optimal size
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Option 5: AWS S3 + CloudFront
**Pros**: Highly scalable, global CDN, cost-effective at scale  
**Cost**: Pay-as-you-go (typically < $1/month for low traffic)

```bash
# Deploy to S3
aws s3 sync dist/ s3://polkational-bucket --delete
aws cloudfront create-invalidation --distribution-id E123456 --paths "/*"
```

## Deployment Checklist

### Pre-Deployment
- [x] Build succeeds locally (`npm run build`)
- [x] Tests pass (`npm run test`)
- [x] Linting passes (`npm run lint`)
- [x] TypeScript compiles (`npm run type-check`)
- [x] Environment variables configured (`.env.production`)
- [x] Performance tested (Lighthouse > 90)
- [x] Accessibility tested (WCAG AA compliant)
- [x] Browser compatibility verified
- [x] Mobile responsiveness confirmed

### Post-Deployment
- [ ] SSL certificate active (HTTPS)
- [ ] DNS records configured (if custom domain)
- [ ] Analytics configured (optional)
- [ ] Error tracking enabled (Sentry, LogRocket)
- [ ] Performance monitoring (Lighthouse CI)
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Social media meta tags verified
- [ ] SEO tags verified (Open Graph, Twitter Cards)

## Environment Configuration

### Production Environment Variables
```bash
# .env.production
VITE_POLKADOT_RPC_ENDPOINT=wss://rpc.polkadot.io
VITE_APP_NAME=Polkational
VITE_APP_VERSION=1.0.0
VITE_ENVIRONMENT=production
```

### Custom RPC Endpoint (Optional)
```bash
# For better performance, consider using:
# - Parity's public endpoints
# - OnFinality (API key required)
# - Self-hosted Polkadot node

VITE_POLKADOT_RPC_ENDPOINT=wss://polkadot.api.onfinality.io/public-ws
```

## CI/CD Pipeline

### GitHub Actions Workflow (`.github/workflows/ci.yml`)
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci --legacy-peer-deps
      
      - name: Run linter
        run: npm run lint
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run tests
        run: npm run test
      
      - name: Build
        run: npm run build
      
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/

  deploy:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: dist
          path: dist/
      
      - name: Deploy to Vercel
        run: |
          npm install -g vercel
          vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## Performance Optimization for Production

### Build Optimizations
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'polkadot-api': ['@polkadot/api', '@polkadot/api-contract']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  }
});
```

### CDN and Caching Headers
```nginx
# nginx.conf
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    # Aggressive caching for assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # No caching for HTML
    location / {
        try_files $uri /index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
}
```

## Monitoring and Analytics

### Recommended Tools

#### 1. **Uptime Monitoring**
- **UptimeRobot** (Free): 5-minute checks
- **Pingdom** (Paid): Advanced monitoring
- **StatusCake** (Free tier): Global checks

#### 2. **Performance Monitoring**
- **Lighthouse CI**: Automated performance audits
- **Web Vitals**: Real user metrics
- **Sentry**: Error tracking and performance

#### 3. **Analytics** (Optional)
- **Google Analytics**: User behavior
- **Plausible**: Privacy-friendly analytics
- **Simple Analytics**: GDPR compliant

### Sample Monitoring Setup
```typescript
// Monitor Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: Metric) {
  // Send to your analytics endpoint
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## Security Considerations

### Security Headers
```nginx
# Add security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' wss://rpc.polkadot.io;" always;
```

### SSL/TLS Configuration
- Use Let's Encrypt for free SSL certificates
- Force HTTPS redirect
- Enable HSTS (HTTP Strict Transport Security)
- Use TLS 1.2+ only

## Scaling Considerations

### Expected Load
```
Concurrent Users: 100-500 (initial)
Requests/Second: 10-50 (initial)
Bandwidth: < 1 TB/month (initial)

Infrastructure:
- Static hosting (no backend) = Infinite scaling
- RPC calls limited by public endpoint rate limits
- CDN handles global distribution
```

### Rate Limiting (RPC)
```typescript
// Implement client-side rate limiting for RPC calls
const rateLimiter = {
  requests: 0,
  limit: 50, // 50 requests per minute
  window: 60000, // 1 minute
  
  async throttle() {
    if (this.requests >= this.limit) {
      await new Promise(resolve => setTimeout(resolve, this.window));
      this.requests = 0;
    }
    this.requests++;
  }
};
```

## Deployment Timeline

### Phase 1: Initial Deployment (Week 1)
- [x] Set up hosting account (Vercel/Netlify)
- [ ] Configure custom domain (optional)
- [ ] Deploy production build
- [ ] Verify all features work
- [ ] Set up monitoring

### Phase 2: Optimization (Week 2)
- [ ] Configure CDN caching
- [ ] Set up analytics (if desired)
- [ ] Run Lighthouse audits
- [ ] Optimize based on real user data

### Phase 3: Promotion (Week 3-4)
- [ ] Submit to Polkadot directory
- [ ] Share on social media
- [ ] Post on community forums
- [ ] Gather user feedback

## Troubleshooting Common Issues

### Issue 1: WebSocket Connection Failures
**Symptom**: "Failed to connect to Polkadot network"  
**Solutions**:
1. Check RPC endpoint is accessible
2. Verify CORS headers allow WebSocket
3. Try alternative RPC endpoints
4. Check firewall/proxy settings

### Issue 2: Slow Initial Load
**Symptom**: > 5s load time  
**Solutions**:
1. Enable Gzip/Brotli compression
2. Verify CDN is serving assets
3. Check bundle size (should be < 500 KB initial)
4. Use code splitting

### Issue 3: 404 on Routes
**Symptom**: Direct navigation to `/dashboard` returns 404  
**Solutions**:
1. Configure SPA fallback to `index.html`
2. Add redirect rules to hosting config
3. Verify `vercel.json` or `netlify.toml` is correct

## Post-Deployment Success Metrics

### Week 1 Targets
- [ ] Uptime: > 99.5%
- [ ] Lighthouse Performance: > 90
- [ ] Average Load Time: < 3s
- [ ] Error Rate: < 0.1%

### Month 1 Targets
- [ ] Unique Visitors: 500+
- [ ] Average Session: > 3 minutes
- [ ] Bounce Rate: < 60%
- [ ] Return Visitors: > 20%

## Support and Maintenance

### Maintenance Schedule
- **Daily**: Monitor uptime and errors
- **Weekly**: Review analytics and user feedback
- **Monthly**: Update dependencies and security patches
- **Quarterly**: Performance audit and optimization

### Support Channels
- **GitHub Issues**: Bug reports and feature requests
- **Email**: contact@polkational.io (if applicable)
- **Discord/Telegram**: Community support

---

**Note**: Actual deployment URLs will be added once the application is deployed to a public hosting provider. The repository is fully deployment-ready with all necessary configurations in place.

**Last Updated**: February 2026  
**Deployment Status**: Ready for production deployment
