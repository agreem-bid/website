import Image from "next/image";

interface Props {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

/**
 * A block that displays a title, description, and an image.
 * Used in the Features section of the homepage.
 */

export default function FeatureBlock({
  title,
  description,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      {imageSrc && imageAlt && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={500}
          width={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8 rounded-md"
        />
      )}
    </div>
  );
}
