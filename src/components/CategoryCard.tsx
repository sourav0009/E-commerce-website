interface propsType {
    img: string;
    name: string;
    count: string;
}

const CategoryCard:React.FC<propsType> = ({img,name,count}) => {
  return (
    <div className=" border border-gray-200 hover:broder-gray-300 hs-accordion ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 transition-transform rounded-lg">
      <div className=" flex justify-between items-center p-6">
        <div className=" space-y-4">
            <h3 className=" font-medium text-xl">{name}</h3>
            <p className=" text-gray-500">{count}</p>
        </div>
        <img className=" w-[100px]" src={img} alt={name} />
      </div>
    </div>
  )
}

export default CategoryCard
