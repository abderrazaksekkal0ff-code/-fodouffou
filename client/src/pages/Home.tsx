import { Zap, Shield, Users, ArrowRight, MessageSquare } from "lucide-react";

/**
 * Design Philosophy: Modern Bold Design with RGB Accents
 * - Dark background with purple/blue accents and RGB glow effects
 * - Single hero image (bot character) for consistency
 * - Fully responsive design for mobile and desktop
 * - Smooth animations with RGB lighting effects
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-2">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663130410319/ZwTCSAsrbeHCKcdBqwLkbB/bot-speeatw_ecac1af9.jpeg" 
              alt="Speeatw Bot" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg" 
            />
            <span className="font-bold text-lg md:text-xl" style={{ fontFamily: "Poppins" }}>
              Speeatw
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <a href="https://discord.gg/Hh4vDHnMYB" target="_blank" rel="noopener noreferrer">
              <button className="hidden sm:flex px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-border hover:bg-card transition-colors">
                Support
              </button>
            </a>
            <a href="https://discord.com/oauth2/authorize?client_id=1486768942486650974&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer">
              <button className="px-3 md:px-4 py-2 text-sm md:text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all hover:shadow-lg hover:shadow-primary/50">
                Add Bot
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
        {/* RGB Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="space-y-3 md:space-y-4">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground"
                  style={{ fontFamily: "Poppins" }}
                >
                  Your Powerful Discord Companion
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  Speeatw brings advanced moderation, fun commands, and community
                  engagement tools to your Discord server. Keep your community safe
                  and engaged with powerful automation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="https://discord.com/oauth2/authorize?client_id=1486768942486650974&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2">
                    Add Speeatw Now
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </a>
                <a href="https://discord.gg/Hh4vDHnMYB" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full px-6 md:px-8 py-3 md:py-4 border border-border hover:bg-card rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                    Join Support
                  </button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8">
                <div className="space-y-1 md:space-y-2">
                  <p className="text-xl md:text-2xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
                    50K+
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">Active Servers</p>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-xl md:text-2xl font-bold text-accent" style={{ fontFamily: "Poppins" }}>
                    100K+
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">Happy Users</p>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-xl md:text-2xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
                    99.9%
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>

            {/* Right Image - Bot Character */}
            <div className="relative animate-in fade-in slide-in-from-right-4 duration-700 delay-200 flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* RGB Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-2xl blur-2xl opacity-60 animate-pulse" />
                
                <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card/50 p-4 md:p-6">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663130410319/ZwTCSAsrbeHCKcdBqwLkbB/bot-speeatw_ecac1af9.jpeg"
                    alt="Speeatw Bot Character"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-card/30 border-y border-border">
        <div className="container">
          <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Why Choose Speeatw?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed to make server management effortless and
              keep your community thriving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Feature 1 */}
            <div className="group p-4 md:p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2" style={{ fontFamily: "Poppins" }}>
                Powerful Moderation
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Advanced moderation tools including auto-mod, user management,
                logging, and customizable punishment systems.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-4 md:p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2" style={{ fontFamily: "Poppins" }}>
                Community Features
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Engage your community with fun commands, giveaways, welcome messages,
                member tracking, and announcements.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-4 md:p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2" style={{ fontFamily: "Poppins" }}>
                Lightning Fast
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Optimized for speed and reliability with 99.9% uptime guarantee.
                Instant responses and seamless integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="container text-center space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Add Speeatw to your Discord server today and start enjoying powerful
              features that will transform your community management.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a href="https://discord.com/oauth2/authorize?client_id=1486768942486650974&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2">
                Add Speeatw to Discord
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </a>
            <a href="https://discord.gg/Hh4vDHnMYB" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full px-6 md:px-8 py-3 md:py-4 border border-border hover:bg-card rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                Join Community
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="space-y-3 md:space-y-4 col-span-2 md:col-span-1">
              <div className="flex items-center gap-2">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663130410319/ZwTCSAsrbeHCKcdBqwLkbB/bot-speeatw_ecac1af9.jpeg" 
                  alt="Speeatw Bot" 
                  className="w-6 h-6 md:w-8 md:h-8 rounded-lg" 
                />
                <span className="font-bold text-sm md:text-base" style={{ fontFamily: "Poppins" }}>
                  Speeatw
                </span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Your powerful Discord companion for moderation and community engagement.
              </p>
            </div>

            <div className="space-y-2 md:space-y-4">
              <h4 className="font-semibold text-xs md:text-sm" style={{ fontFamily: "Poppins" }}>
                Product
              </h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 md:space-y-4">
              <h4 className="font-semibold text-xs md:text-sm" style={{ fontFamily: "Poppins" }}>
                Community
              </h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <a href="https://discord.gg/Hh4vDHnMYB" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    Discord Server
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/Hh4vDHnMYB" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 md:space-y-4">
              <h4 className="font-semibold text-xs md:text-sm" style={{ fontFamily: "Poppins" }}>
                Legal
              </h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p>&copy; 2026 BrezScales. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
