import {ImageResponse} from 'next/og';

export const alt =
  'David Marquez — Software Engineer focused on Java backend and distributed systems';
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{alignItems: 'flex-start', background: '#f7f6f2', color: '#20242c', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '72px 84px', width: '100%'}}>
      <div style={{display: 'flex', fontSize: 30, fontWeight: 600}}>David Marquez</div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
        <div style={{color: '#456b91', display: 'flex', fontSize: 28}}>Software Engineer</div>
        <div style={{display: 'flex', fontSize: 64, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1.05, maxWidth: 950}}>
          Java Backend &amp; Distributed Systems
        </div>
      </div>
    </div>,
    {width: size.width, height: size.height}
  );
}
