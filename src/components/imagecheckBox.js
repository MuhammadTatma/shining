

export default function imageCheckBox(props){
  const {product} = props;
  return (
    <>
      <div key={product.id} className="group relative">
        <input id={product.id} type="checkbox" className="absolute left-2 top-2 z-10 accent-primary peer"></input>
        
        <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-2 xl:aspect-w-2 border-2 peer-checked:border-primary">
          <label htmlFor={product.id} >
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className=" h-full w-full object-cover object-center group-hover:opacity-75"
          />
          </label>
        </div>
      </div>

    </>
  )
}