import { triggerStore } from "@/lib/blogTriggers";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RxHalf2 } from "react-icons/rx";

interface liItemsProps {
  title: string;
  subtitle: string;
  content: string;
}

const BlogPostList: React.FC = () => {
  const triggerStoreHandler = triggerStore();

  const liItems: liItemsProps[] = [
    {
      title: "Lorem",
      subtitle: "Lorem ipsum.",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem2",
      subtitle: "Lorem ipsum.",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem3",
      subtitle: "Lorem ipsum.",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem4",
      subtitle: "Lorem ipsum.",
      content: "Lorem ipsum dolor sit amet",
    },
  ];

  const ulStyles: string =
    "flex flex-col gap-8 absolute  bottom-[27%] left-[17%]";

  return (
    <AnimatePresence>
      {triggerStoreHandler.blogPosts ? (
        <motion.ul
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          exit={{ opacity: 0 }}
          className={cn(ulStyles)}
        >
          <ScrollArea>
            {liItems.map((el, idx) => (
              <ListItem key={idx} {...el}></ListItem>
            ))}
          </ScrollArea>
        </motion.ul>
      ) : null}
    </AnimatePresence>
  );
};

const ListItem = (item: liItemsProps) => {
  const spanStyles: string = "flex flex-row gap-4 items-center";
  return (
    <span className={cn(spanStyles, "group relative")}>
      <span className="group min-w-40 relative text-4xl my-2 font-bold uppercase">
        {item.title}
      </span>

      <span
        className={cn(
          "group-hover:flex hidden items-center ml-40 justify-center"
        )}
      >
        <span className="text-2xl">{item.subtitle}</span>
        <span className="text-2xl">{item.content}</span>
      </span>
    </span>
  );
};

export default BlogPostList;
