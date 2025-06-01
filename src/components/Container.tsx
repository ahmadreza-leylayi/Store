
interface IContainerProps {
    children: React.ReactNode
}

function Container({children}: IContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      {children}
    </div>
  )
}

export default Container
