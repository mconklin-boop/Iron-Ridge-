import Link from "next/link";

export default function NotFound() {
  return <section className="simple-page"><div className="container page-header"><p className="eyebrow">404 • Page not found</p><h1>This road doesn’t go anywhere.</h1><p>The page may have moved or the address may be incomplete. Return home or contact Iron Ridge for help.</p><div className="button-row"><Link className="button button-primary" href="/">Return home</Link><Link className="button" href="/contact">Contact us</Link></div></div></section>;
}
