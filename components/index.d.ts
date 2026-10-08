import type * as React from 'react';
export type BrandColour = 'red' | 'purple' | 'gold';
export interface LogoProps { ink?: 'black' | 'white' | 'red'; dome?: BrandColour | null; height?: number; className?: string }
export declare function Logo(props: LogoProps): React.ReactElement;
export interface DomeProps { colour?: BrandColour | 'black' | 'white'; size?: number; className?: string }
export declare function Dome(props: DomeProps): React.ReactElement;
export interface TaglineProps { ink?: 'black' | 'white'; dome?: BrandColour; height?: number; className?: string }
export declare function Tagline(props: TaglineProps): React.ReactElement;
export interface BrandIconProps { name: string; colour?: BrandColour | 'white' | 'black'; size?: number; label?: string; src?: string; className?: string }
export declare function BrandIcon(props: BrandIconProps): React.ReactElement;
export interface ArrowProps { variant?: number; ink?: 'black' | 'white'; width?: number; className?: string }
export declare function Arrow(props: ArrowProps): React.ReactElement;
export interface ShapeImageProps { src?: string; alt?: string; shape?: 1 | 2 | 3 | 4 | 5 | 6; colour?: BrandColour; mask?: boolean; width?: number; className?: string }
export declare function ShapeImage(props: ShapeImageProps): React.ReactElement;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'quiet'; href?: string }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface PillProps { tone?: 'neutral' | 'red' | 'purple' | 'gold' | 'dark'; children?: React.ReactNode; className?: string }
export declare function Pill(props: PillProps): React.ReactElement;
export interface SectionHeaderProps { eyebrow?: string; title: React.ReactNode; intro?: React.ReactNode; level?: 1 | 2; className?: string }
export declare function SectionHeader(props: SectionHeaderProps): React.ReactElement;
export interface StatementProps { colour?: BrandColour | 'ink'; children: string; className?: string }
export declare function Statement(props: StatementProps): React.ReactElement;
export interface StatTileProps { label: string; value: string; delta?: string; period?: string; emphasis?: boolean; className?: string }
export declare function StatTile(props: StatTileProps): React.ReactElement;
export interface InsightCardProps { number?: number; children: React.ReactNode; className?: string }
export declare function InsightCard(props: InsightCardProps): React.ReactElement;
export interface FeatureBoxProps { icon?: string; colour?: BrandColour; title: string; children?: React.ReactNode; className?: string }
export declare function FeatureBox(props: FeatureBoxProps): React.ReactElement;
export interface QuoteProps { children: string; by?: string; className?: string }
export declare function Quote(props: QuoteProps): React.ReactElement;
export interface BarChartProps { data: Array<{ label: string } & Record<string, number | string>>; series: string[]; title?: string; width?: number; height?: number; className?: string }
export declare function BarChart(props: BarChartProps): React.ReactElement;
export interface DataTableProps { columns: Array<{ key: string; label: string; numeric?: boolean }>; rows: Array<Record<string, React.ReactNode>>; className?: string }
export declare function DataTable(props: DataTableProps): React.ReactElement;
export interface TeamMemberProps { photo?: string; name: string; title: string; shape?: 1 | 2 | 3 | 4 | 5 | 6; colour?: BrandColour; className?: string }
export declare function TeamMember(props: TeamMemberProps): React.ReactElement;
export interface ContactBlockProps { colour?: BrandColour | 'ink'; address?: string; suburb?: string; phone?: string; web?: string; className?: string }
export declare function ContactBlock(props: ContactBlockProps): React.ReactElement;
export interface SlideProps { layout?: 'cover' | 'content' | 'divider' | 'closing' | 'statement' | 'quote' | 'title'; ground?: 'snow' | 'black' | 'red' | 'purple' | 'gold'; ink?: 'black' | 'snow'; title: string; subtitle?: string; by?: string; date?: string; accent?: BrandColour; image?: string; shape?: 1 | 2 | 3 | 4 | 5 | 6; shapeColour?: BrandColour; domeColour?: BrandColour | 'black' | 'white'; rule?: boolean; dense?: boolean; logoCorner?: 'bottom-left' | 'bottom-right'; theme?: 'light' | 'dark'; children?: React.ReactNode; className?: string }
export declare function Slide(props: SlideProps): React.ReactElement;
declare global { interface Window { HalfDome: { config: { useBlobs: boolean; blobBase: string; assetBase: string } } & typeof import('./index') } }
