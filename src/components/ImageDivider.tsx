interface ImageDividerProps {
  images: string[];
}

export function ImageDivider({ images }: ImageDividerProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 h-32 md:h-48 overflow-hidden">
      {images.map((src, index) => (
        <div key={index} className="relative overflow-hidden">
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      ))}
    </div>
  );
}
