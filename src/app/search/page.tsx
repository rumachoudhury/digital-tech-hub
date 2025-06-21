if (process.env.NODE_ENV === "development") {
  console.warn("⚠️ Search page is using a dummy component.");
}

export default function SearchPage() {
  return (
    <div className="mt-32 px-6 text-center text-red-500 text-xl">
      🔧 This page is temporarily disabled.
    </div>
  );
}
