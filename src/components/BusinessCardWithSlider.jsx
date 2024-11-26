import React, { useState } from "react";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import photographerImage from "../assets/lourdes-fotografa.jpg";
import casadosImage from "../assets/casamento-civil.jpeg";
import estudioImage from "../assets/ensaio-natal.jpg";
import corporativoImage from "../assets/corporativo.jpg";
import aniversariosImage from "../assets/aniversarios.jpg";
import scalineImage from "../assets/scanline.png";

const BusinessCardWithSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const portfolioItems = [
        {
            title: "Estúdio",
            description:
                "• Sessões exclusivas em estúdio\n• Iluminação profissional\n• Ambientes personalizados\n• Book profissional",
            image: estudioImage,
            gradient: "from-gray-600 to-gray-900",
        },
        {
            title: "Casamentos no Civil",
            description:
                "• Cobertura completa do evento\n• Álbum personalizado",
            image: casadosImage,
            gradient: "from-blue-800 to-indigo-900",
        },
        {
            title: "Aniversários",
            description:
                "• Momentos especiais\n• Fotografia espontânea\n• Edição premium\n• Álbum digital",
            image: aniversariosImage,
            gradient: "from-cyan-400 to-blue-500",
        },
        {
            title: "Corporativo",
            description:
                "• Eventos empresariais\n• Retratos profissionais\n• Congressos e palestras\n• Marketing digital",
            image: corporativoImage,
            gradient: "from-gray-700 to-black",
        },
    ];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % portfolioItems.length);
    };

    const prevSlide = () => {
        setActiveSlide(
            (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length
        );
    };

    return (
        <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden bg-white shadow-lg">
            {/* Header Section */}
            <div className="p-6 bg-gradient-radial bg-[#7a8a5e] relative">
                {/* Scanline overlay */}
                <div className="absolute inset-0 opacity-5">
                    <img
                        src={scalineImage}
                        alt=""
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>

                {/* Conteúdo do header - com z-index para ficar sobre o scanline */}
                <div className="relative z-10">
                    <div className="text-center mb-6">
                        {/* Container da foto com gradient */}
                        <div className="w-48 h-48 mx-auto rounded-full p-1 bg-gradient-to-r from-pink-500 to-violet-600">
                            {/* Container interno com padding */}
                            <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                                {/* Imagem */}
                                <img
                                    src={photographerImage}
                                    alt="Lourdes Lima"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <h2 className="text-3xl font-semibold text-slate-50 mt-4">
                            Lourdes Lima
                        </h2>
                        <p className="text-gray-200 font-medium">
                            Fotógrafa Profissional
                        </p>
                    </div>

                    {/* Contact Buttons */}
                    <div className="space-y-3">
                        <a
                            href="https://wa.me/5521999204547?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20fotográfica"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-3 px-4 rounded-lg bg-[#f28f3b] text-white font-semibold hover:bg-[#e07a4e] shadow-md text-center"
                        >
                            Em que posso te ajudar ?
                        </a>
                    </div>
                </div>
            </div>

            {/* Portfolio Slider Section - Atualizado com responsividade */}
            <div className="w-full relative px-5 py-7">
                {portfolioItems.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full transition-all duration-500 ${
                            activeSlide === index
                                ? "block opacity-100"
                                : "hidden opacity-0"
                        }`}
                    >
                        <div
                            className={`relative p-4 sm:p-6 bg-gradient-to-r ${item.gradient} rounded-2xl shadow-md`}
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                <div className="w-full sm:w-1/2">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
                                        {item.title}
                                    </h3>
                                    <div className="space-y-2 text-white">
                                        {item.description
                                            .split("\n")
                                            .map((line, i) => (
                                                <p key={i} className="text-sm">
                                                    {line}
                                                </p>
                                            ))}
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 sm:pl-4">
                                    <div className="h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg mx-auto sm:ml-auto">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slide Navigation */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full px-2 sm:px-6 flex justify-between">
                    <button
                        onClick={prevSlide}
                        className="w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-white backdrop-blur-sm"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-white backdrop-blur-sm"
                    >
                        ›
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 pt-4">
                    {portfolioItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                activeSlide === index
                                    ? "bg-[#f59e0b]"
                                    : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Social Media Buttons */}
            <div className="px-6 py-4 grid grid-cols-2 gap-3">
                <a
                    href="https://wa.me/5521999204547?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20fotográfica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition shadow"
                >
                    <MessageCircle className="w-5 h-5 text-[#946c00]" />
                    <span className="text-gray-700">WhatsApp</span>
                </a>
                <a
                    href="https://www.instagram.com/lourdeslimafotografa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition shadow"
                >
                    <Instagram className="w-5 h-5 text-[#946c00]" />
                    <span className="text-gray-700">Instagram</span>
                </a>
            </div>

            {/* Contact Info Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>
                            R. Itaúna, 374 - Itatiaia, Duque de Caxias - RJ
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <a
                            href="tel:+5521999204547"
                            className="flex items-center space-x-2 hover:text-[#946c00] transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span>(21) 99920-4547</span>
                        </a>
                        <a
                            href="mailto:lmgmsl@gmail.com"
                            className="flex items-center space-x-2 hover:text-[#946c00] transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            <span>lmgmsl@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessCardWithSlider;
