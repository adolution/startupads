import {
  Default,
  CustomColor,
  FastAnimation,
  HoverToRotate,
  StopOnHover,
  CustomBorder,
  Feature,
} from '@/components/ui/animated-gradient-border-demo'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center gap-10 py-16 px-4">
      <h1 className="text-3xl font-bold text-white">Animated Gradient Border</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <Default />
        <CustomColor />
        <FastAnimation />
        <HoverToRotate />
        <StopOnHover />
        <CustomBorder />
      </div>
      <div className="w-full max-w-3xl">
        <Feature />
      </div>
    </div>
  )
}

export default App
