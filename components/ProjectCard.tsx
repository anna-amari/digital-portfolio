interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="border rounded-lg p-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="rounded mb-4 w-full h-48 object-cover" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </a>
  );
}
