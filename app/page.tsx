const contact = {
    phone: "+55 44 99986-0337",
    whatsappUrl:
        "https://wa.me/5544999860337?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20banho%20e%20tosa%20com%20busca%20e%20entrega%20%F0%9F%90%B6",
    email: "Figueiredor694@gmail.com",
    instagramUrl: "https://www.instagram.com/mundodos_bichos/"
};

const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=R.%20Pres.%20Vargas%2C%2049%20-%20Vila%20Bernardino%2C%20Mandagua%C3%A7u%20-%20PR%2C%2087160-000";

const mapsEmbedUrl =
    "https://www.google.com/maps?q=R.%20Pres.%20Vargas,%2049%20-%20Vila%20Bernardino,%20Mandagua%C3%A7u%20-%20PR&output=embed";

const contactLinks = [
    {
        label: "WhatsApp",
        value: contact.phone,
        href: contact.whatsappUrl,
        ariaLabel: "Agendar banho e tosa pelo WhatsApp"
    },
    {
        label: "Email",
        value: contact.email,
        href: `mailto:${contact.email}`,
        ariaLabel: "Enviar email para Mundo dos Bichos"
    },
    {
        label: "Instagram",
        value: "@mundodos_bichos",
        href: contact.instagramUrl,
        ariaLabel: "Abrir Instagram da Mundo dos Bichos"
    },
    {
        label: "Endereço",
        value: "R. Pres. Vargas, 49 - Vila Bernardino, Mandaguaçu - PR, 87160-000",
        href: mapsUrl,
        ariaLabel: "Abrir endereço da Mundo dos Bichos no Google Maps"
    }
];

const businessHours = {
    title: "Horário de atendimento:",
    weekdays: "Segunda a sexta, das 08:00 às 18:00",
    saturday: "Sábado, das 08:00 às 12:00",
    appointment: "Atendemos com horário marcado.",
    scheduling: "Fale conosco pelo WhatsApp para agendar.",
    compactWeekdays: "Seg–Sex: 08:00–18:00",
    compactSaturday: "Sáb: 08:00–12:00"
};

const benefits = [
    {
        title: "Busca e entrega incluídas",
        description:
            "Você não precisa sair de casa. Buscamos e devolvemos seu pet com segurança."
    },
    {
        title: "Atendimento com calma",
        description: "Cada pet é tratado com atenção, calma e respeito ao seu tempo."
    },
    {
        title: "Ambiente limpo",
        description: "Higiene, organização e segurança durante o atendimento."
    }
];

const services = [
    {
        title: "Banho",
        description: "Higiene completa e pelagem limpa."
    },
    {
        title: "Tosa completa",
        description: "Acabamento conforme porte e pelagem."
    },
    {
        title: "Tosa higiênica",
        description: "Limpeza nas áreas que precisam de atenção frequente."
    },
    {
        title: "Corte de unhas",
        description: "Unhas aparadas com delicadeza."
    },
    {
        title: "Higienização",
        description: "Limpeza extra para o dia a dia."
    }
];

const pricingGroups = [
    {
        title: "Pequeno e médio porte",
        rows: [
            {
                service: "Banho",
                price: "R$ 60"
            },
            {
                service: "Banho + tosa higiênica",
                price: "R$ 65"
            },
            {
                service: "Banho + tosa completa",
                price: "R$ 100"
            }
        ]
    },
    {
        title: "Porte grande",
        rows: [
            {
                service: "Banho",
                price: "R$ 150"
            },
            {
                service: "Banho + tosa higiênica",
                price: "R$ 170"
            },
            {
                service: "Banho + tosa completa",
                price: "R$ 220"
            }
        ]
    }
];

const imageAssets = [
    {
        id: "hero-groomed-pet",
        src: "https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&w=1200&q=85",
        alt: "Cachorro limpo e feliz após banho e tosa",
        label: "Depois do banho",
        type: "after"
    },
    {
        id: "groomer-bathing",
        src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85",
        alt: "Profissional dando banho em cachorro com cuidado",
        label: "Cuidado profissional",
        type: "specialist"
    },
    {
        id: "groomer-brushing",
        src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85",
        alt: "Profissional escovando cachorro durante banho e tosa",
        label: "Cuidado profissional",
        type: "specialist"
    },
    {
        id: "clean-environment",
        src: "https://images.unsplash.com/photo-1601758063541-d2f50b4aafb2?auto=format&fit=crop&w=900&q=85",
        alt: "Ambiente limpo e organizado para banho e tosa",
        label: "Ambiente limpo",
        type: "environment"
    },
    {
        id: "happy-delivery",
        src: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=900&q=85",
        alt: "Cachorro limpo recebendo carinho depois do atendimento",
        label: "Depois do banho",
        type: "delivery"
    },
    {
        id: "finished-pet",
        src: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=900&q=85",
        alt: "Cachorro feliz e limpo pronto para voltar para casa",
        label: "Depois do banho",
        type: "after"
    }
];

const careCards = [
    {
        imageId: "groomer-bathing",
        title: "Banho com cuidado",
        text: "Higiene em primeiro lugar"
    },
    {
        imageId: "groomer-brushing",
        title: "Escovação e acabamento",
        text: "Atendimento com calma"
    },
    {
        imageId: "clean-environment",
        title: "Ambiente preparado",
        text: "Cuidado individual"
    },
    {
        imageId: "happy-delivery",
        title: "Mais praticidade",
        text: "Menos stress para o tutor"
    }
];

const contactBenefits = [
    "Busca e entrega na sua casa",
    "Atendimento com calma",
    "Ambiente limpo e organizado"
];

function WhatsAppButton({
    children,
    className = ""
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <a
            className={`button button-primary ${className}`}
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar banho e tosa pelo WhatsApp"
        >
            {children}
        </a>
    );
}

function SectionHeading({
    eyebrow,
    title,
    text
}: Readonly<{
    eyebrow?: string;
    title: string;
    text?: string;
}>) {
    return (
        <div className="section-heading">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h2>{title}</h2>
            {text ? <p>{text}</p> : null}
        </div>
    );
}

function imageById(id: string) {
    const image = imageAssets.find((asset) => asset.id === id);

    if (!image) {
        return imageAssets[0];
    }

    return image;
}

export default function Home() {
    const whatsappContact = contactLinks.find((item) => item.label === "WhatsApp") ?? contactLinks[0];
    const instagramContact =
        contactLinks.find((item) => item.label === "Instagram") ?? contactLinks[0];
    const addressContact = contactLinks.find((item) => item.label === "Endereço") ?? contactLinks[0];
    const heroImage = imageById("hero-groomed-pet");
    const contactImage = imageById("finished-pet");

    return (
        <main>
            <header className="site-header">
                <a className="brand" href="#top" aria-label="Ir para o início da página">
                    <span className="brand-mark">
                        <img
                            src="/images/logo/mundo-dos-bichos.png"
                            alt="Logo Mundo dos Bichos"
                        />
                    </span>
                    <span>
                        <strong>Mundo dos Bichos</strong>
                        <small>Banho & Tosa</small>
                    </span>
                </a>

                <nav className="nav-links" aria-label="Navegação principal">
                    <a href="#top">Início</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#diferenciais">Diferenciais</a>
                    <a href="#precos">Valores</a>
                    <a href="#contato">Contato</a>
                </nav>

            </header>

            <section className="hero section-shell" id="top">
                <div className="hero-copy">
                    <span className="eyebrow">Banho & Tosa em Mandaguaçu - PR</span>
                    <h1>Banho & Tosa em Mandaguaçu com busca e entrega</h1>
                    <p>
                        Buscamos na sua casa, fazemos o atendimento e devolvemos seu pet limpo e
                        tranquilo.
                    </p>
                    <span className="hero-trust-line">
                        Atendimento local em Mandaguaçu
                    </span>

                    <div className="hero-actions">
                        <WhatsAppButton>Agendar pelo WhatsApp</WhatsAppButton>
                        <a className="button button-secondary" href="#servicos">
                            Ver serviços
                        </a>
                    </div>

                </div>

                <div className="hero-card" aria-label="Destaque de banho e tosa com busca e entrega">
                    <div className="hero-image">
                        <img src={heroImage.src} alt={heroImage.alt} />
                    </div>
                    <div className="pickup-card">
                        <span>Busca e entrega</span>
                        <strong>Buscamos e entregamos seu pet em casa</strong>
                    </div>
                </div>
            </section>

            <section className="section-shell feature-section" id="diferenciais">
                <SectionHeading
                    eyebrow="Diferencial Mundo dos Bichos"
                    title="Por que escolher o Mundo dos Bichos?"
                    text="Praticidade para você e um atendimento calmo para o pet."
                />

                <div className="benefit-grid">
                    {benefits.map((benefit) => (
                        <article className="benefit-card" key={benefit.title}>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section-shell" id="servicos">
                <SectionHeading
                    eyebrow="Serviços"
                    title="Serviços"
                    text="Banho, tosas e higiene para a rotina do seu pet."
                />

                <div className="card-grid">
                    {services.map((service) => (
                        <article
                            className={`service-card ${
                                service.title === "Banho" ? "service-card-highlight" : ""
                            }`}
                            key={service.title}
                        >
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>

            </section>

            <section className="section-shell care-section">
                <div className="care-copy">
                    <SectionHeading
                        eyebrow="Ambiente"
                        title="Limpo, organizado e tranquilo"
                        text="Um espaço preparado para banho e tosa com calma."
                    />
                </div>

                <div className="care-grid">
                    {careCards.map((card) => {
                        const image = imageById(card.imageId);

                        return (
                            <article className="care-card" key={card.title}>
                                <img src={image.src} alt={image.alt} />
                                <div>
                                    <span>{card.text}</span>
                                    <strong>{card.title}</strong>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="section-shell pricing-section" id="precos">
                <div className="pricing-panel">
                    <SectionHeading
                        eyebrow="Valores"
                        title="Valores dos serviços"
                        text="Preços claros para banho e tosa, com confirmação pelo WhatsApp."
                    />

                    <div className="pricing-groups" aria-label="Tabela de preços de banho e tosa">
                        {pricingGroups.map((group) => (
                            <article className="pricing-group" key={group.title}>
                                <h3>{group.title}</h3>
                                <div className="pricing-list">
                                    {group.rows.map((item) => (
                                        <div className="pricing-row" key={`${group.title}-${item.service}`}>
                                            <span>{item.service}</span>
                                            <strong>{item.price}</strong>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="pricing-highlight">
                        Busca e entrega incluídas sem custo adicional
                    </div>

                    <p className="pricing-note">
                        Valores podem variar conforme pelagem, comportamento e necessidades do pet.
                    </p>

                    <WhatsAppButton>Agendar pelo WhatsApp</WhatsAppButton>
                </div>
            </section>

            <section className="section-shell contact-section" id="contato">
                <div className="contact-conversion-card">
                    <SectionHeading
                        eyebrow="Contato e localização"
                        title="Agende o cuidado do seu pet"
                        text="Consulte horários e serviços disponíveis."
                    />

                    <div className="contact-trust-card">
                        <div>
                            <span>Atendimento seguro</span>
                            <p>
                                Seu pet recebe atenção em um ambiente limpo e organizado.
                            </p>
                        </div>
                        <img src={contactImage.src} alt={contactImage.alt} />
                    </div>

                    <ul className="contact-benefits" aria-label="Benefícios rápidos do atendimento">
                        {contactBenefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>

                    <div className="contact-list contact-actions">
                        {[whatsappContact, instagramContact].map((contactLink) => (
                            <a
                                className={contactLink.label === "WhatsApp" ? "contact-primary" : ""}
                                href={contactLink.href}
                                key={contactLink.label}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={contactLink.ariaLabel}
                            >
                                <span>{contactLink.label}</span>
                                <strong>
                                    {contactLink.label === "WhatsApp"
                                        ? "Agendar pelo WhatsApp"
                                        : "Ver mais no Instagram"}
                                </strong>
                            </a>
                        ))}
                    </div>

                </div>

                <div className="location-card">
                    <span className="eyebrow">Vila Bernardino</span>
                    <h3>Estamos em Mandaguaçu</h3>
                    <p>
                        R. Pres. Vargas, 49 - Vila Bernardino.
                    </p>
                    <div className="contact-address">
                        <span>Endereço</span>
                        <strong>{addressContact.value}</strong>
                    </div>
                    <div className="business-hours">
                        <h4>{businessHours.title}</h4>
                        <p>
                            {businessHours.weekdays}
                            <br />
                            {businessHours.saturday}
                        </p>
                        <p>
                            {businessHours.appointment}
                            <br />
                            {businessHours.scheduling}
                        </p>
                    </div>
                    <div className="map-card">
                        <a
                            className="button button-secondary"
                            href={addressContact.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={addressContact.ariaLabel}
                        >
                            Abrir no Google Maps
                        </a>
                        <iframe
                            src={mapsEmbedUrl}
                            title="Mapa da Mundo dos Bichos em Mandaguaçu"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <div className="footer-inner">
                    <div className="footer-cta">
                        <span>Vagas limitadas por dia</span>
                        <h2>Agende o cuidado do seu pet</h2>
                        <WhatsAppButton>Agendar pelo WhatsApp</WhatsAppButton>
                    </div>

                    <div className="footer-grid">
                        <section className="footer-column">
                            <h3>Mundo dos Bichos</h3>
                            <p>Banho & Tosa em Mandaguaçu</p>
                            <strong>Cuidado, carinho e praticidade para o seu pet.</strong>
                        </section>

                        <section className="footer-column">
                            <h3>Contato</h3>
                            <a href={whatsappContact.href} target="_blank" rel="noreferrer">
                                WhatsApp: {whatsappContact.value}
                            </a>
                            <a href={instagramContact.href} target="_blank" rel="noreferrer">
                                Instagram: @mundodos_bichos
                            </a>
                            <p>
                                {businessHours.compactWeekdays}
                                <br />
                                {businessHours.compactSaturday}
                            </p>
                        </section>

                        <section className="footer-column">
                            <h3>Mandaguaçu - PR</h3>
                            <p>R. Pres. Vargas, 49 - Vila Bernardino</p>
                            <strong>Busca e entrega na sua casa</strong>
                        </section>
                    </div>

                    <div className="footer-bottom">
                        <span>{whatsappContact.value}</span>
                        <span>@mundodos_bichos</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}
