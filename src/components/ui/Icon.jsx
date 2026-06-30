import {
  Sparkles, Scissors, Droplet, Feather, Eye, Flower2, Hand, Leaf,
  GraduationCap, Award, Gem, ShieldCheck, Home, Wallet, Crown, HeartHandshake,
} from 'lucide-react';

const map = {
  sparkles: Sparkles,
  scissors: Scissors,
  droplet: Droplet,
  feather: Feather,
  eye: Eye,
  flower: Flower2,
  hand: Hand,
  leaf: Leaf,
  'graduation-cap': GraduationCap,
  award: Award,
  gem: Gem,
  'shield-check': ShieldCheck,
  home: Home,
  wallet: Wallet,
  crown: Crown,
  'heart-handshake': HeartHandshake,
};

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Sparkles;
  return <Cmp {...props} />;
}
