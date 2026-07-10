import React from "react";
import {
  CakeSlice,
  Croissant,
  Coffee,
  Star,
  ShoppingBag,
  Heart,
  ArrowRight,
  Sparkles,
  Clock3,
  Truck,
  ShieldCheck,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Gift,
  Wheat,
  Flame,
  Leaf,
  BadgePercent,
  Candy,
  CupSoda,
  IceCream2,
  ChefHat,
  Quote,
  Check,
  PlayCircle,
  Users,
  TrendingUp,
  Award,
  CalendarDays,
} from "lucide-react";

export default function App() {
  const featuredProducts = [
    {
      title: "Honey Lavender Cake",
      price: "$34",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
      description:
        "Silky buttercream infused with local lavender and raw mountain honey.",
      badge: "Best Seller",
    },
    {
      title: "Artisan Berry Tart",
      price: "$18",
      image:
        "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=1200&q=80",
      description:
        "Fresh seasonal berries layered over vanilla bean custard.",
      badge: "Fresh Daily",
    },
    {
      title: "Golden Butter Croissant",
      price: "$6",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
      description:
        "Flaky handcrafted croissants baked every sunrise in small batches.",
      badge: "Signature",
    },
    {
      title: "Chocolate Cloud Éclair",
      price: "$12",
      image:
        "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1200&q=80",
      description:
        "Dark cocoa glaze, whipped cream center, and delicate choux pastry.",
      badge: "Limited",
    },
  ];

  const showcaseItems = [
    {
      icon: Wheat,
      title: "Organic Ingredients",
      text:
        "Locally sourced flour, free-range eggs, cultured butter, and pure vanilla in every creation.",
    },
    {
      icon: Flame,
      title: "Stone Oven Baked",
      text:
        "Traditional baking methods that create rich textures, deep flavor, and irresistible aroma.",
    },
    {
      icon: Leaf,
      title: "Seasonal Menus",
      text:
        "Curated desserts inspired by changing seasons and fresh market produce.",
    },
    {
      icon: Gift,
      title: "Elegant Packaging",
      text:
        "Every order is wrapped beautifully for gifting, celebrations, and memorable moments.",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?auto=format&fit=crop&w=900&q=80",
  ];

  const testimonials = [
    {
      name: "Olivia Bennett",
      role: "Wedding Planner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      text:
        "Sweet Delights creates the kind of desserts people remember years later. Their cakes are elegant, flavorful, and always flawless.",
    },
    {
      name: "Marcus Rivera",
      role: "Food Critic",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      text:
        "Every pastry tastes deeply intentional. The textures, ingredients, and presentation rival luxury patisseries in major cities.",
    },
    {
      name: "Sophia Lee",
      role: "Local Customer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      text:
        "The warm atmosphere and handmade desserts make this bakery my favorite weekend ritual. Nothing compares to their croissants.",
    },
  ];

  const pricing = [
    {
      title: "Morning Favorites",
      price: "$24",
      desc: "Perfect for breakfast tables and cozy brunches.",
      features: [
        "6 artisan croissants",
        "Seasonal jam pairing",
        "Fresh roasted coffee",
        "Same-day pickup",
      ],
      highlight: false,
    },
    {
      title: "Celebration Box",
      price: "$68",
      desc: "Curated desserts for birthdays and special occasions.",
      features: [
        "Custom mini cake",
        "12 assorted pastries",
        "Elegant packaging",
        "Complimentary note card",
      ],
      highlight: true,
    },
    {
      title: "Luxury Dessert Table",
      price: "$180",
      desc: "Premium catering for intimate events and gatherings.",
      features: [
        "Chef-crafted assortment",
        "Signature dessert styling",
        "Delivery included",
        "Seasonal floral accents",
      ],
      highlight: false,
    },
  ];

  const stats = [
    { icon: Users, value: "24k+", label: "Happy Customers" },
    { icon: Award, value: "18", label: "Local Awards" },
    { icon: TrendingUp, value: "98%", label: "Repeat Orders" },
    { icon: CalendarDays, value: "12 Years", label: "Craft Experience" },
  ];

  return (
    <div className="min-h-screen bg-[#fff8f2] text-stone-800 overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-rose-200/30 rounded-full blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-200">
                <CakeSlice className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight">
                  Sweet Delights
                </h1>
                <p className="text-xs text-stone-500">
                  Artisan Bakery & Dessert Studio
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-orange-500 transition">
                Home
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                Collections
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                Catering
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                Story
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 border border-white shadow-lg hover:shadow-xl transition">
                <Heart className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-semibold">Favorites</span>
              </button>

              <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-200 hover:scale-[1.02] transition">
                <ShoppingBag className="w-4 h-4" />
                <span className="text-sm font-semibold">Order Now</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-orange-100 shadow-md mb-8">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-stone-700">
                  Handcrafted daily with premium ingredients
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-stone-900">
                Freshly baked joy for every sweet moment.
              </h2>

              <p className="mt-8 text-lg leading-8 text-stone-600 max-w-xl">
                Discover luxurious pastries, elegant celebration cakes, buttery
                croissants, and handcrafted desserts inspired by timeless
                European bakeries and local seasonal flavors.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-2xl shadow-orange-200 flex items-center justify-center gap-3">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>

                <button className="px-8 py-4 rounded-2xl bg-white/70 backdrop-blur border border-white shadow-xl flex items-center justify-center gap-3 font-semibold">
                  <PlayCircle className="w-5 h-5 text-orange-500" />
                  Watch Our Story
                </button>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6">
                <div className="bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock3 className="w-5 h-5 text-orange-500" />
                    <span className="font-bold">Daily Fresh</span>
                  </div>
                  <p className="text-sm text-stone-600">
                    Baked every morning before sunrise.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Truck className="w-5 h-5 text-orange-500" />
                    <span className="font-bold">Fast Delivery</span>
                  </div>
                  <p className="text-sm text-stone-600">
                    Local delivery available daily.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                    <span className="font-bold">Premium Quality</span>
                  </div>
                  <p className="text-sm text-stone-600">
                    Trusted recipes and artisan craftsmanship.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-rose-200 rounded-full blur-3xl opacity-60" />

              <div className="relative bg-white/50 border border-white backdrop-blur-2xl rounded-[2.5rem] p-6 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=80"
                  alt=""
                  className="rounded-[2rem] w-full h-[620px] object-cover"
                />

                <div className="absolute bottom-12 left-12 right-12 bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                      </div>
                      <h3 className="text-xl font-black">
                        Signature Strawberry Cake
                      </h3>
                      <p className="text-stone-600 text-sm mt-1">
                        Loved by over 12,000 customers this year.
                      </p>
                    </div>

                    <button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg">
                      <ShoppingBag className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -left-12 top-20 bg-white/80 backdrop-blur-xl rounded-3xl p-5 shadow-2xl border border-white hidden xl:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <Coffee className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Fresh Brew Pairings</h4>
                    <p className="text-sm text-stone-500">
                      Perfect coffee with every pastry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-10 bottom-20 bg-white/80 backdrop-blur-xl rounded-3xl p-5 shadow-2xl border border-white hidden xl:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center">
                    <Candy className="w-7 h-7 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Seasonal Specials</h4>
                    <p className="text-sm text-stone-500">
                      New flavors crafted weekly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6">
                <ChefHat className="w-4 h-4" />
                Curated Bakery Collection
              </div>

              <h3 className="text-4xl md:text-5xl font-black tracking-tight max-w-2xl">
                Signature desserts crafted with elegance and warmth.
              </h3>
            </div>

            <p className="max-w-xl text-stone-600 leading-8">
              Each dessert is thoughtfully designed to blend rich flavor,
              beautiful presentation, and unforgettable texture. Explore our
              most loved handcrafted creations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {featuredProducts.map((item, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur text-sm font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <button className="absolute top-5 right-5 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                    <Heart className="w-5 h-5 text-rose-500" />
                  </button>
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-black">{item.title}</h4>
                      <p className="text-stone-600 mt-3 leading-7 text-sm">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-2xl font-black text-orange-500">
                      {item.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>

                    <button className="px-5 py-3 rounded-2xl bg-stone-900 text-white font-semibold hover:bg-orange-500 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-transparent to-orange-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1400&q=80"
                alt=""
                className="rounded-[2.5rem] shadow-2xl h-[760px] object-cover w-full"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-orange-100 mb-6">
                <Croissant className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold">
                  Why locals love Sweet Delights
                </span>
              </div>

              <h3 className="text-5xl font-black tracking-tight leading-tight">
                Baking traditions elevated into unforgettable experiences.
              </h3>

              <p className="mt-8 text-lg leading-8 text-stone-600">
                We blend old-world techniques with modern creativity to create
                pastries and cakes that feel both nostalgic and luxurious.
                Every recipe is tested, refined, and baked with care.
              </p>

              <div className="mt-12 space-y-6">
                {showcaseItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-5 bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white shadow-lg"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="w-7 h-7" />
                    </div>

                    <div>
                      <h4 className="text-xl font-black">{item.title}</h4>
                      <p className="text-stone-600 leading-7 mt-2">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="px-5 py-3 rounded-2xl bg-white border border-orange-100 shadow-md font-semibold flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-orange-500" />
                  Seasonal Discounts
                </div>

                <div className="px-5 py-3 rounded-2xl bg-white border border-orange-100 shadow-md font-semibold flex items-center gap-2">
                  <CupSoda className="w-5 h-5 text-orange-500" />
                  Café Pairings
                </div>

                <div className="px-5 py-3 rounded-2xl bg-white border border-orange-100 shadow-md font-semibold flex items-center gap-2">
                  <IceCream2 className="w-5 h-5 text-orange-500" />
                  Dessert Flights
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Bakery Gallery
            </div>

            <h3 className="text-5xl font-black tracking-tight">
              Moments baked beautifully.
            </h3>

            <p className="mt-6 text-lg text-stone-600 leading-8">
              Explore snapshots from our bakery kitchen, dessert collections,
              custom events, and seasonal specialties loved by our community.
            </p>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-4 gap-6 space-y-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[2rem] group"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full object-cover rounded-[2rem] group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-xl font-black">
                      Artisan Collection {index + 1}
                    </h4>
                    <p className="text-sm text-white/80 mt-2">
                      Crafted with premium ingredients and seasonal inspiration.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-gradient-to-br from-stone-900 via-orange-950 to-stone-900 rounded-[3rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,180,80,0.25),transparent_35%)]" />

            <div className="relative grid lg:grid-cols-2 gap-12 p-10 lg:p-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-orange-200 mb-6">
                  <Gift className="w-4 h-4" />
                  Private Catering & Events
                </div>

                <h3 className="text-5xl font-black text-white leading-tight">
                  Elegant dessert tables for unforgettable celebrations.
                </h3>

                <p className="mt-8 text-lg text-stone-300 leading-8">
                  Weddings, birthdays, corporate gatherings, and intimate dinner
                  parties deserve desserts that look extraordinary and taste even
                  better.
                </p>

                <div className="mt-10 grid sm:grid-cols-2 gap-5">
                  {[
                    "Luxury wedding cakes",
                    "Custom dessert styling",
                    "Fresh floral presentation",
                    "Personalized tasting sessions",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white"
                    >
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-12 px-8 py-4 rounded-2xl bg-white text-stone-900 font-bold flex items-center gap-3 hover:bg-orange-100 transition">
                  Schedule a Consultation
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1400&q=80"
                  alt=""
                  className="rounded-[2.5rem] shadow-2xl h-[580px] w-full object-cover"
                />

                <div className="absolute -bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-stone-500">
                        Featured Wedding Collection
                      </p>
                      <h4 className="text-2xl font-black mt-1">
                        Garden Rose Celebration Cake
                      </h4>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-black text-orange-500">
                        4.9
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-orange-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-orange-100 mb-6">
              <Quote className="w-4 h-4 text-orange-500" />
              Customer Love
            </div>

            <h3 className="text-5xl font-black tracking-tight">
              Sweet words from our community.
            </h3>

            <p className="mt-6 text-lg text-stone-600 leading-8">
              From casual café mornings to milestone celebrations, our bakery
              has become part of countless cherished memories.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-xl"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 rounded-2xl object-cover"
                  />

                  <div>
                    <h4 className="text-xl font-black">{item.name}</h4>
                    <p className="text-stone-500">{item.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-6">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>

                <p className="mt-6 text-stone-600 leading-8 text-lg">
                  “{item.text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-4 gap-8 mb-20">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-xl text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>

                <div className="mt-6 text-5xl font-black text-stone-900">
                  {item.value}
                </div>

                <div className="mt-3 text-stone-500 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6">
              <BadgePercent className="w-4 h-4" />
              Catering & Dessert Packages
            </div>

            <h3 className="text-5xl font-black tracking-tight">
              Flexible options for every celebration.
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`rounded-[2.5rem] p-8 border relative overflow-hidden ${
                  plan.highlight
                    ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-2xl shadow-orange-200 scale-[1.02]"
                    : "bg-white/80 backdrop-blur-xl border-white shadow-xl"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-white text-orange-500 font-black text-sm">
                    Most Popular
                  </div>
                )}

                <h4 className="text-3xl font-black">{plan.title}</h4>

                <div className="mt-6 text-6xl font-black">{plan.price}</div>

                <p
                  className={`mt-5 leading-7 ${
                    plan.highlight ? "text-orange-100" : "text-stone-600"
                  }`}
                >
                  {plan.desc}
                </p>

                <div className="mt-10 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          plan.highlight
                            ? "bg-white text-orange-500"
                            : "bg-orange-100 text-orange-500"
                        }`}
                      >
                        <Check className="w-4 h-4" />
                      </div>

                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-12 w-full py-4 rounded-2xl font-bold transition ${
                    plan.highlight
                      ? "bg-white text-orange-500 hover:bg-orange-50"
                      : "bg-stone-900 text-white hover:bg-orange-500"
                  }`}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-orange-200">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col lg:flex-row gap-10 items-center justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-semibold mb-6">
                  <Mail className="w-4 h-4" />
                  Join Our Bakery Club
                </div>

                <h3 className="text-5xl font-black leading-tight">
                  Fresh pastries, seasonal launches, and exclusive rewards.
                </h3>

                <p className="mt-6 text-orange-50 text-lg leading-8">
                  Subscribe for limited-edition desserts, early access to holiday
                  collections, and members-only tasting experiences.
                </p>
              </div>

              <div className="w-full max-w-xl">
                <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-[2rem] p-4 flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-transparent placeholder:text-orange-100 text-white outline-none px-4 py-4"
                  />

                  <button className="px-8 py-4 rounded-2xl bg-white text-orange-500 font-black hover:bg-orange-50 transition">
                    Subscribe
                  </button>
                </div>

                <p className="text-sm text-orange-100 mt-4">
                  By subscribing, you’ll receive curated bakery updates and
                  occasional seasonal promotions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-24 pb-10 bg-stone-950 text-stone-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                  <CakeSlice className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h4 className="text-3xl font-black text-white">
                    Sweet Delights
                  </h4>
                  <p className="text-stone-400">
                    Artisan Bakery & Dessert Studio
                  </p>
                </div>
              </div>

              <p className="mt-8 leading-8 text-stone-400 max-w-xl">
                Sweet Delights is a neighborhood bakery dedicated to handcrafted
                pastries, elegant desserts, and meaningful hospitality. We bake
                fresh daily using thoughtfully sourced ingredients and timeless
                techniques.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-white font-black text-lg mb-6">
                Explore
              </h5>

              <div className="space-y-4">
                {[
                  "Seasonal Collections",
                  "Wedding Cakes",
                  "Pastry Boxes",
                  "Gift Cards",
                  "Bakery Café",
                  "Holiday Specials",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block hover:text-white transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-white font-black text-lg mb-6">
                Company
              </h5>

              <div className="space-y-4">
                {[
                  "About Our Bakery",
                  "Meet The Bakers",
                  "Customer Reviews",
                  "Press Features",
                  "Careers",
                  "Contact Us",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block hover:text-white transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-white font-black text-lg mb-6">
                Contact
              </h5>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="leading-7">
                    142 Maple Avenue
                    <br />
                    Brookside District
                    <br />
                    Portland, OR 97205
                  </p>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p>(503) 555-2189</p>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p>hello@sweetdelights.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col lg:flex-row gap-6 items-center justify-between">
            <p className="text-stone-500">
              © 2026 Sweet Delights. Crafted with warmth, elegance, and fresh
              butter every morning.
            </p>

            <div className="flex flex-wrap items-center gap-8 text-sm text-stone-500">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>

              <a href="#" className="hover:text-white transition">
                Delivery Policy
              </a>

              <a href="#" className="hover:text-white transition">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}