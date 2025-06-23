export default function LNB({
  menuItems,
}: {
  menuItems: { label: string; path: string }[];
}) {
  return (
    <nav>
      <div>MyAdmin</div>
      <div>
        {menuItems.map((item) => (
          <>{item.label}</>
        ))}
      </div>
    </nav>
  );
}
