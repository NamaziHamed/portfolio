export default function Footer() {
  return (
    <footer className="py-8 border-t text-center bg-gray-950/80">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Hamed Namazi
      </p>
    </footer>
  );
}
