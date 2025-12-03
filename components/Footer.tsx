import React from 'react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-sans text-2xl font-bold mb-6 lowercase tracking-tight">kendy <span className="text-brand-red">+</span> kobayashi</h2>
            <p className="text-brand-gray/60 max-w-sm font-sans font-light mb-6">
              "Arquitetura para ser sentida." <br/>
              Especialistas em projetos de alto padrão em Maringá e Porto Rico.
            </p>
            <p className="text-brand-gray/40 font-mono text-xs">
              {CONTACT_INFO.address}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-mono text-xs font-bold mb-6 text-brand-red uppercase tracking-widest">Navegação</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-brand-gray/60 hover:text-white transition-colors font-sans text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-mono text-xs font-bold mb-6 text-brand-red uppercase tracking-widest">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-brand-dark hover:bg-brand-red hover:text-white transition-all text-white/60">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 bg-brand-dark hover:bg-brand-red hover:text-white transition-all text-white/60">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-3 bg-brand-dark hover:bg-brand-red hover:text-white transition-all text-white/60">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-gray/40 font-mono">
          <p>© 2023 Kendy + Kobayashi Arquitetos.</p>
          <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-wider">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;