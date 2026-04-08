import React from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      id="about"
      className="py-20 sm:py-32 bg-surface-alt text-text-muted"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem (agora primeira na ordem visual em telas maiores) */}
          <div className="flex justify-center lg:justify-end">
            {" "}
            {/* Ajuste para alinhar à direita em telas maiores */}
            <img
              src="/profile_1.jpg"
              alt="Dan Marques - Desenvolvedor Fullstack"
              className="rounded-lg shadow-2xl w-full max-w-xs object-cover"
              loading="lazy"
            />
          </div>
          {/* Texto (agora segunda na ordem visual em telas maiores) */}
          <div>
            <h2 className="text-3xl font-bold text-text mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg mb-4">{t("about.description")}</p>
            <p className="text-lg mb-4">
              <Trans
                i18nKey="about.p1"
                components={{
                  strong: <strong className="text-primary font-semibold" />
                }}
              />
            </p>
            <p className="text-lg">
              <Trans i18nKey="about.p2" />
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
