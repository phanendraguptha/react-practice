import { Folder } from "lucide-react";
import React, { useState } from "react";

type Item = {
  id: string;
  name: string;
  isFolder: boolean;
  items?: Item[];
};

type Data = Item[];

type Props = {
  data: Data;
};

const data = [
  {
    id: "1",
    name: "Root",
    isFolder: true,
    items: [
      { id: "2", name: "index.html", isFolder: false },
      { id: "3", name: "package.json", isFolder: false },
      {
        id: "4",
        name: "public",
        isFolder: true,
        items: [
          { id: "5", name: "favicon", isFolder: false },
          { id: "6", name: "image.png", isFolder: false },
        ],
      },
    ],
  },
];

const MainComponent = () => {
  return <FileQuestion data={data} />;
};

const FileQuestion: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <FileItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const FileItem: React.FC<{ item: Item }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {item.isFolder ? (
        <div
          className="cursor-pointer flex gap-2 mt-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Folder /> {item.name}
        </div>
      ) : (
        <div className="mt-1">{item.name}</div>
      )}

      {isOpen && item.items && item.items.length > 0 && (
        <div className="ml-8">
          <FileQuestion data={item.items} />
        </div>
      )}
    </div>
  );
};

export default MainComponent;

// initial code
// const FileQuestion: React.FC<Props> = ({ data }) => {
//   console.log(data, "here");
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       {data.map((item) => (
//         <React.Fragment key={item.id}>
//           {/* showing folder */}
//           {item.isFolder && (
//             <div onClick={() => setIsOpen(!isOpen)}>
//               <Folder /> {item.name}
//             </div>
//           )}

//           {/* showing files */}
//           {isOpen &&
//             item?.items?.map((i) => {
//               return (
//                 <React.Fragment key={i.id}>
//                   {i.isFolder ? (
//                     <>{i?.items?.length && <FileQuestion data={[i]} />}</>
//                   ) : (
//                     <div>{i.name}</div>
//                   )}
//                 </React.Fragment>
//               );
//             })}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };
