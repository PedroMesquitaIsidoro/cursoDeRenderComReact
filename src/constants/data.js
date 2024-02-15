import images from "./images";
import { CgAlarm } from "react-icons/cg";
import { FaRegKeyboard } from "react-icons/fa6";
import { AiTwotoneRocket } from "react-icons/ai";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { AiTwotonePlaySquare } from "react-icons/ai";
import { IoGlassesSharp } from "react-icons/io5";

import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";
import { RiNumber6 } from "react-icons/ri";





const services = [
    {
        icon: <CgAlarm className="mx-auto" size={60}/>,
        title: "Render rápido",
        paragraph: "Aprenda a criar renders rápidos e eficientes sem passar horas tentando atingir o resultado desejado."
    },
    {
        icon: <IoGlassesSharp className="mx-auto" size={60}/>,
        title: "Realismo",
        paragraph: "Explore a busca pelo realismo em seus renders. Descubra métodos eficazes para tornar suas imagens mais autênticas e impactantes."
    },
    {
        icon: <FaRegKeyboard className="mx-auto" size={60}/>,
        title: "Configurações simplificadas",
        paragraph: "Simplifique suas configurações e otimize seu fluxo de trabalho."
    },
    {
        icon: <AiTwotoneRocket className="mx-auto" size={60}/>,
        title: "Agilidade",
        paragraph: "Ganhe agilidade em seus projetos de renderização. Nosso curso foca em técnicas que economizam tempo, permitindo que você alcance resultados impressionantes de maneira rápida e eficiente."
    },
    {
        icon: <AiTwotoneThunderbolt className="mx-auto" size={60}/>,
        title: "Produtividade",
        paragraph: "Aumente sua produtividade no processo de renderização. Descubra estratégias para maximizar seu tempo e recursos, garantindo que cada render seja uma expressão eficaz de sua visão."
    },
    {
        icon: <AiTwotonePlaySquare className="mx-auto" size={60}/>,
        title: "Criação de fotos e vídeos do projeto",
        paragraph: "Aprenda a utilizar o Enscape para produzir imagens e vídeos envolventes que destacam o potencial de seus designs."
    },
];

const works = [
    {
        image: `${images.work_img_1}`
    },
    {
        image: `${images.work_img_2}`
    },
    {
        image: `${images.work_img_3}`
    },
    {
        image: `${images.work_img_4}`
    },
    {
        image: `${images.work_img_5}`
    },
    {
        image: `${images.work_img_6}`
    },
];

const work_process = [
    {
        title: "Sketch",
        paragraph: "Nunc sodales lacus nec felis suscipit dictum"
    },
    {
        title: "Design",
        paragraph: "Nunc sodales lacus nec felis suscipit dictum"
    },
    {
        title: "Develop",
        paragraph: "Nunc sodales lacus nec felis suscipit dictum"
    },
    {
        title: "End-Product",
        paragraph: "Nunc sodales lacus nec felis suscipit dictum"
    },
];

const about_stats = [
    {
        image: `${images.stat_img_1}`,
        value: "1575",
        title: "Clients"
    },
    {
        image: `${images.stat_img_2}`,
        value: "2416",
        title: "Projects"
    },
    {
        image: `${images.stat_img_3}`,
        value: "4287",
        title: "Working Hours"
    },
    {
        image: `${images.stat_img_4}`,
        value: "287",
        title: "Awards"
    },
];

const testimonials = [
    {
        name: "Lelia Merritt",
        post: "Graphic Designer",
        paragraph: "Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed pulvinar magna tempus quis. Mauris risus odio, semper sit amet tortor a, tristique consectetur urna."
    },
    {
        name: "John Huston",
        post: "Web Developer",
        paragraph: "Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed pulvinar magna tempus quis. Mauris risus odio, semper sit amet tortor a, tristique consectetur urna."
    },
    {
        name: "Jeniffer Green",
        post: "Marketing Manager",
        paragraph: "Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed pulvinar magna tempus quis. Mauris risus odio, semper sit amet tortor a, tristique consectetur urna."
    },
]

const logos = [
    {
        image: `${images.logo_img_1}`
    },
    {
        image: `${images.logo_img_2}`
    },
    {
        image: `${images.logo_img_3}`
    },
    {
        image: `${images.logo_img_4}`
    },
    {
        image: `${images.test_img_5}`
    },
    {
        image: `${images.test_img_6}`
    },
];

const matters = [
    {
        icon: <RiNumber1 
        className="mx-auto" size={60}/>,
        title: "Introdução",
        paragraph: "Obtendo o Enscape, Bônus 1 (Plug-ins para o sket), Otimizando o sket, Pré visualização e idioma"
    },
    {
        icon: <RiNumber2 className="mx-auto" size={60}/>,
        title: "Ferramentas",
        paragraph: "Ferramentas, Movimentação, Blocos e materiais, Iluminação artificial, SOL+ HDRI"
    },
    {
        icon: <RiNumber3 className="mx-auto" size={60}/>,
        title: "Configurações de materiais",
        paragraph: "Generic, Bump, Tipos de materiais, Bônus 2 (Collection)"
    },
    {
        icon: <RiNumber4 className="mx-auto" size={60}/>,
        title: "Render",
        paragraph: "Referências, Lentes de câmera, Enquadramento"
    },
    {
        icon: <RiNumber5 className="mx-auto" size={60}/>,
        title: "Render interno (Quarto infantil)",
        paragraph: "Iluminação, Vídeo, Materiais"
    },
    {
        icon: <RiNumber6 className="mx-auto" size={60}/>,
        title: "Render externo (Fachada)",
        paragraph: "Iluminação, Vídeo, Materiais"
    },
];

export {services, matters, works, work_process, about_stats, testimonials, logos};
