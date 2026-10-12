import PageTransition from '@/components/common/PageTransition';

// Re-mounts on every navigation, giving each page the original enter animation.
export default function Template({ children }) {
  return <PageTransition>{children}</PageTransition>;
}
