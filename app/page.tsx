import Hero from '@/components/home/Hero'
import CategoryGrid from '@/components/home/CategoryGrid'
import ValueProps from '@/components/home/ValueProps'
import FeaturedCollection from '@/components/home/FeaturedCollection'
import NewArrivals from '@/components/home/NewArrivals'
import ProjectsStrip from '@/components/home/ProjectsStrip'
import Professionalsband from '@/components/home/ProfessionalsBand'
import Showroom from '@/components/home/Showroom'
import JournalTeaser from '@/components/home/JournalTeaser'
import ClosingCTA from '@/components/home/ClosingCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ValueProps />
      <FeaturedCollection />
      <NewArrivals />
      <ProjectsStrip />
      <Professionalsband />
      <Showroom />
      <JournalTeaser />
      <ClosingCTA />
    </>
  )
}
