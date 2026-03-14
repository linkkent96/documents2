---
id: cross-application-communication
title: Cross Application Communication
slug: /cross-application-communication
---

# How to build micro-frontends using multi-zones and Next.js

Refs: [Guides: Multi-zones | Next.js](https://nextjs.org/docs/app/guides/multi-zones)

Multi-Zones are an approach to micro-frontends that separate a large application on a domain into smaller Next.js applications that each serve a set of paths. This is useful when there are collections of pages unrelated to the other pages in the application. By moving those pages to a separate zone (i.e., a separate application), you can reduce the size of each application which improves build times and removes code that is only necessary for one of the zones. Since applications are decoupled, Multi-Zones also allows other applications on the domain to use their own choice of framework. [oai_citation:1‡Next.js](https://nextjs.org/docs/app/guides/multi-zones)

For example, let’s say you have the following set of pages that you would like to split up:

- `/blog/*` for all blog posts
- `/dashboard/*` for all pages when the user is logged-in to the dashboard
- `/*` for the rest of your website not covered by other zones

With Multi-Zones support, you can create three applications that all are served on the same domain and look the same to the user, but you can develop and deploy each of the applications independently. [oai_citation:2‡Next.js](https://nextjs.org/docs/app/guides/multi-zones)

Navigating between pages in the same zone will perform _soft navigations_ (no full page reload). Navigating from a page in one zone to a page in another zone performs _hard navigations_, unloading current resources and loading resources from the new zone. Pages frequently visited together should live in the same zone to avoid unnecessary hard navigations. [oai_citation:3‡Next.js](https://nextjs.org/docs/app/guides/multi-zones)

---

### How to define a zone

A zone is a normal Next.js application where you also configure an `assetPrefix` to avoid conflicts with pages and static files in other zones. [oai_citation:4‡Next.js](https://nextjs.org/docs/app/guides/multi-zones)

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/blog-static',
};
```

Next.js assets such as JavaScript and CSS will be prefixed with assetPrefix to ensure they don’t conflict with assets from other zones. These assets will be served under /blog-static/\_next/.... ￼

The default application handling all paths not routed to another more specific zone does not need an assetPrefix. ￼

In versions older than Next.js 15, you might need additional rewrites to handle static assets. This is no longer necessary in Next.js 15: ￼

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/blog-static',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog-static/_next/:path+',
          destination: '/_next/:path+',
        },
      ],
    };
  },
};
```

⸻

### How to route requests to the right zone

With Multi-Zones set up, you must route incoming requests to the correct zone since they are served by different applications. You can use any HTTP proxy for this, or you can use a Next.js app to route for the entire domain using rewrites. ￼

Example rewrite configuration:

```js
async rewrites() {
    return [
        {
            source: '/blog',
            destination: `${process.env.BLOG_DOMAIN}/blog`,
        },
        {
            source: '/blog/:path+',
            destination: `${process.env.BLOG_DOMAIN}/blog/:path+`,
        },
        {
            source: '/blog-static/:path+',
            destination: `${process.env.BLOG_DOMAIN}/blog-static/:path+`,
        }
    ];
}
```

    •	destination should be a URL served by the target zone, including scheme and domain.
    •	You can point to the zone’s production domain or to localhost for local development.  ￼

Good to know: URL paths should be unique to a zone to avoid routing conflicts. ￼

### Routing requests using a proxy

Using rewrites is recommended to minimize latency overhead, but a dynamic proxy might be useful if you need to make routing decisions at runtime (e.g., using feature flags). ￼

Example proxy handler:

```js
export async function proxy(request) {
  const {pathname, search} = request.nextUrl;

  if (pathname === '/your-path' && myFeatureFlag.isEnabled()) {
    return NextResponse.rewrite(
      `${rewriteDomain}${pathname}${search}`,
    );
  }
}
```

⸻

### Linking between zones

Links to paths in a different zone should use a plain `<a>` tag instead of Next.js `<Link>`, because `<Link>` attempts to prefetch and soft navigate relative paths, which won’t work across zones. ￼

⸻

### Sharing code

Next.js applications for different zones can live in any repository. Putting zones in a monorepo often makes sharing common code easier. You can also share code using public or private npm packages if zones live in separate repos.

Since zones may be deployed independently, feature flags can help coordinate feature roll-outs across zones. ￼

⸻

### Server Actions

When using Server Actions with Multi-Zones, you must explicitly allow the user-facing origin since your user-facing domain may serve multiple applications. Add the following to your next.config.js: ￼

```js
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['your-production-domain.com'],
    },
  },
};
```

See serverActions.allowedOrigins for more details. ￼
