export default function EssentialTools() {
  const items = [
    {
      title: "Payments",
      desc: "Responsibly sourced woods and eco-friendly fabrics for a better tomorrow.",
      icon: "📟",
    },
    {
      title: "Analytics",
      desc: "Understand your growth with smart, built-in analytics.",
      icon: "📊",
    },
    {
      title: "Newsletters",
      desc: "Build your audience with engaging, branded newsletter.",
      icon: "📰",
    },
    {
      title: "Pages",
      desc: "Showcase your expertise with a personal profile that sells for you.",
      icon: "📃",
    },
    {
      title: "Contact",
      desc: "Organize your contacts and turn them into your most valuable asset.",
      icon: "🛂",
    },
    {
      title: "Emails",
      desc: "Showcase your expertise with a personal profile that sells for you.",
      icon: "✉",
    },
    {
      title: "Co-sell network",
      desc: "Collaborate with others to sell more without ad spend or extra effort.",
      icon: "🧣",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#F7F1E8] py-16 px-6">
      <div className="text-center mb-12">
        <p className="text-xs tracking-wide font-semibold mb-2">
          ESSENTIAL TOOLS
        </p>
        <h1 className="text-4xl font-bold leading-tight">
          Essential Tools
          <br />
          Zero Distractions
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Create diverse products on the platform and leverage our powerful
          tools to drive sales within and beyond GrowHubs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {items.map((item, index) => (
          <div key={index} className="rounded-2xl shadow-sm p-4 bg-white">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            <a href="#" className="text-[#EFAF4B] text-sm font-medium">
              Learn more →
            </a>
          </div>
        ))}

        <div className="bg-[#2D2A40] text-white rounded-2xl p-6 shadow-md h-full md:col-span-2-[#2D2A40] text-white rounded-2xl p-6 shadow-md h-full">
          <h2 className="text-xl font-semibold mb-2">Enterprise plan</h2>
          <p className="text-gray-300 mb-4 text-sm max-w-xl">
            Full white-label platform hosted on a dedicated, auto-scaling
            server; includes branding freedom, private content protection, and
            24/7 service availability.
          </p>
          <a href="#" className="text-[#EFAF4B] text-sm font-medium">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}
