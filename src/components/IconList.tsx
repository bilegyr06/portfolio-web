import type { ComponentType } from "react";

import Css3Icon from "@iconify-react/simple-icons/css3";
import FastapiIcon from "@iconify-react/simple-icons/fastapi";
import GitIcon from "@iconify-react/simple-icons/git";
import GithubIcon from "@iconify-react/simple-icons/github";
import Html5Icon from "@iconify-react/simple-icons/html5";
import PandasIcon from "@iconify-react/simple-icons/pandas";
import PostgreSqlIcon from "@iconify-react/simple-icons/postgresql";
import PowerbiIcon from "@iconify-react/simple-icons/powerbi";
import PythonIcon from "@iconify-react/simple-icons/python";
import ReactIcon from "@iconify-react/simple-icons/react";
import ScikitlearnIcon from "@iconify-react/simple-icons/scikitlearn";
import SpaCyIcon from "@iconify-react/simple-icons/spacy";
import SqliteIcon from "@iconify-react/simple-icons/sqlite";
import TensorflowIcon from "@iconify-react/simple-icons/tensorflow";
import TypescriptIcon from "@iconify-react/simple-icons/typescript";
import ViteIcon from "@iconify-react/simple-icons/vite";
import PytorchIcon from "@iconify-react/simple-icons/pytorch"
import type { TagListProps } from "../data/portfolio";

type IconComponent = ComponentType<any>;

const tagIcons: Record<string, IconComponent> = {
  React: ReactIcon,
  TypeScript: TypescriptIcon,
  HTML: Html5Icon,
  CSS: Css3Icon,
  Python: PythonIcon,
  FastAPI: FastapiIcon,
  SQL: SqliteIcon,
  PostgreSQL: PostgreSqlIcon,
  PostreSQL: PostgreSqlIcon,
  "scikit-learn": ScikitlearnIcon,
  spaCy: SpaCyIcon,
  TensorFlow: TensorflowIcon,
  Pytorch: PytorchIcon,
  Pandas: PandasIcon,
  "Power BI": PowerbiIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  Vite: ViteIcon,
};

export function IconList({ tags }: TagListProps) {
  return (
    <ul className="icon-list" aria-label="Technologies and themes">
      {tags.map((tag) => (
        <li key={tag} className="tag-list__item">
          {(() => {
            const Icon = tagIcons[tag];

            return Icon ? <Icon className="tag-list__icon" aria-hidden="true" focusable="false" /> : <span>{tag}</span>;
          })()}
        </li>
      ))}
    </ul>
  );
}
