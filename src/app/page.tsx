import { Hero } from "@/components/sections/Hero"
import { ProofStrip } from "@/components/sections/ProofStrip"
import { WhatIHelpBuild } from "@/components/sections/WhatIHelpBuild"
import { FeaturedWork } from "@/components/sections/FeaturedWork"
import { SelectedWork } from "@/components/sections/SelectedWork"
import { HowIWork } from "@/components/sections/HowIWork"
import { OpenSource } from "@/components/sections/OpenSource"
import { ContactCTA } from "@/components/sections/ContactCTA"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <WhatIHelpBuild />
      <FeaturedWork />
      <SelectedWork />
      <HowIWork />
      <OpenSource />
      <ContactCTA />
    </>
  )
}
