import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-wrap">
      <div className="text-center">
        <div className="not-found-number">404</div>
        <h1 className="not-found-heading">Page not found</h1>
        <p className="not-found-body">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn-gold">Back to Home</Link>
      </div>
    </div>
  );
}
