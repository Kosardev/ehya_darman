import ScreenLayout from '@/app/(content)/layout'
import LandingContent from '@/container/landingContent'


export default function Home() {
  return (
    <ScreenLayout transparentHeader={true}>
        <LandingContent/>
    </ScreenLayout>
  )
}
