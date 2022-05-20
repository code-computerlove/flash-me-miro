// ----------------------------------------------------------------------------
// Generic
interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}
interface Offset {
  top: number;
  left: number;
  bottom: number;
  right: number;
}
type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | {
      [key: string]: Json;
    };
// ----------------------------------------------------------------------------
// Styles
declare enum TagColor {
  Red = "red",
  Magenta = "magenta",
  Violet = "violet",
  LightGreen = "light_green",
  Green = "green",
  DarkGreen = "dark_green",
  Cyan = "cyan",
  Blue = "blue",
  DarkBlue = "dark_blue",
  Yellow = "yellow",
  Gray = "gray",
  Black = "black",
}
declare enum StickyNoteColor {
  Gray = "gray",
  LightYellow = "light_yellow",
  Yellow = "yellow",
  Orange = "orange",
  LightGreen = "light_green",
  Green = "green",
  DarkGreen = "dark_green",
  Cyan = "cyan",
  LightPink = "light_pink",
  Pink = "pink",
  Violet = "violet",
  Red = "red",
  LightBlue = "light_blue",
  Blue = "blue",
  DarkBlue = "dark_blue",
  Black = "black",
}
declare enum ShapeType {
  Rectangle = "rectangle",
  Circle = "circle",
  Triangle = "triangle",
  WedgeRoundRectangleCallout = "wedge_round_rectangle_callout",
  RoundRectangle = "round_rectangle",
  Rhombus = "rhombus",
  Parallelogram = "parallelogram",
  Star = "star",
  RightArrow = "right_arrow",
  LeftArrow = "left_arrow",
  Pentagon = "pentagon",
  Hexagon = "hexagon",
  Octagon = "octagon",
  Trapezoid = "trapezoid",
  FlowChartPredefinedProcess = "flow_chart_predefined_process",
  LeftRightArrow = "left_right_arrow",
  Cloud = "cloud",
  LeftBrace = "left_brace",
  RightBrace = "right_brace",
  Cross = "cross",
  Can = "can",
}
// ----------------------------------------------------------------------------
// Mixins
interface BaseMixin {
  readonly id: string;
  sync(): Promise<void>;
}
interface PositionMixin {
  x: number;
  y: number;
}
interface SizeMixin {
  width: number;
  height: number;
}
interface RotationMixin {
  rotation: number;
}
interface ContainerMixin {
  childrenIds: string[];
  add<T extends Item>(item: T): Promise<T>;
  remove<T extends Item>(item: T): Promise<void>;
  getChildren(): Promise<Item[]>;
}
interface ModifiableMixin {
  readonly createdAt: string;
  readonly createdBy: string;
  readonly modifiedAt: string;
  readonly modifiedBy: string;
}
interface WidgetMixin extends BaseMixin, PositionMixin, ModifiableMixin {
  readonly type: ItemType;
  sync(): Promise<void>;
}
// TODO add ModifiableMixin to EntityMixin
// This is temporary fix to help adoption of the typing file.
interface EntityMixin extends BaseMixin {
  readonly type: EntityType;
  sync(): Promise<void>;
}
// ----------------------------------------------------------------------------
// Widgets
export type ItemType =
   * {@link Text.TextWidget|Text} type
  | "text"
   * {@link StickyNote.StickyNoteWidget|StickyNote} type
  | "sticky_note"
   * {@link Shape.ShapeWidget|Shape} type
  | "shape"
   * {@link Image.ImageWidget|Image} type
  | "image"
   * {@link Frame.FrameWidget|Frame} type
  | "frame"
   * {@link Preview.PreviewWidget|Preview} type
  | "preview"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "card"
  | "app_card"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "usm"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "kanban"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "document"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "mockup"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "curve"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "webscreen"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "table"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "svg"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "emoji"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "embed"
   * Returned as {@link Opaque.OpaqueWidget|Opaque}
  | "connector"
   * Generic fallback type for {@link Opaque.OpaqueWidget|Opaque}
  | "opaque"
   * @ignore
   * Internal. Not to be exposed externally
   *
  | "table_text"
   * @ignore
  | "rallycard"
   * @ignore
  | "stencil";
interface Base extends WidgetMixin {}
export type WidgetPropsOnly<T> = Omit<
  T,
  "sync" | "add" | "remove" | "getChildren"
>;
interface Card extends WidgetMixin, Readonly<SizeMixin>, RotationMixin {
  readonly type: "card";
  title: string;
  description: string;
  dueDate: string;
  assignee?: {
    userId: string;
  };
  style: {
    cardTheme?: string;
  };
   *
   * **Add and remove tags to and from a card**
   *
  tagIds: string[];
}
type CardProps = {
  width?: number;
  height?: number;
  readonly type?: "card";
  title?: string;
  description?: string;
  dueDate?: string;
  assignee?: {
    userId: string;
  };
  style?: {
    cardTheme?: string;
  };
   *
   * **Add and remove tags to and from a card**
   *
  tagIds?: string[];
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  rotation?: number;
};
interface CardField {
  value?: string;
  fillColor?: string;
  textColor?: string;
  iconUrl?: string;
  roundedIcon?: boolean;
  tooltip?: string;
}
interface AppCard extends Omit<Card, "type"> {
  readonly type: "app_card";
  fields?: CardField[];
}
type AppCardProps = {
  width?: number;
  height?: number;
  readonly type?: "app_card";
  title?: string;
  description?: string;
  dueDate?: string;
  assignee?: {
    userId: string;
  };
  style?: {
    cardTheme?: string;
  };
   *
   * **Add and remove tags to and from a card**
   *
  tagIds?: string[];
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  rotation?: number;
  fields?: CardField[];
};
interface Frame extends WidgetMixin, Readonly<SizeMixin>, ContainerMixin {
  readonly type: "frame";
  title: string;
}
type FrameProps = {
  width?: number;
  height?: number;
  readonly type?: "frame";
  title?: string;
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  childrenIds?: string[];
};
interface Image extends WidgetMixin, Readonly<SizeMixin>, RotationMixin {
  readonly type: "image";
  title: string;
  url: string;
}
type ImageProps = {
  width?: number;
  height?: number;
  readonly type?: "image";
  title?: string;
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  rotation?: number;
  url?: string;
};
export type OpaqueType =
  | "curve"
  | "document"
  | "emoji"
  | "table"
  | "kanban"
  | "mockup"
  | "svg"
  | "usm"
  | "webscreen"
  | "connector"
  | "stencil"
  | "opaque"; // Default case
interface Opaque extends WidgetMixin {
  readonly type: OpaqueType;
}
type OpaqueProps = {
  readonly type?: OpaqueType;
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
};
interface Preview extends WidgetMixin, Readonly<SizeMixin> {
  readonly type: "preview";
  url: string;
}
type PreviewProps = {
  width?: number;
  height?: number;
  readonly type?: "preview";
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  url?: string;
};
interface Shape extends WidgetMixin, Readonly<SizeMixin>, RotationMixin {
  readonly type: "shape";
  content: string;
  shape: ShapeType | `${ShapeType}`;
  style: {
    fillColor: string;
  };
}
type ShapeProps = {
  width?: number;
  height?: number;
  readonly type?: "shape";
  style?: {
    fillColor: string;
  };
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  rotation?: number;
  content?: string;
  shape?: ShapeType | `${ShapeType}`;
};
interface StickyNote extends WidgetMixin, Readonly<SizeMixin> {
  readonly type: "sticky_note";
  content: string;
  style: {
    fillColor: StickyNoteColor | `${StickyNoteColor}`;
  };
   *
   * **Add and remove tags to and from a sticky note**
   *
  tagIds: string[];
}
type StickyNoteProps = {
  width?: number;
  height?: number;
  readonly type?: "sticky_note";
  style?: {
    fillColor: StickyNoteColor | `${StickyNoteColor}`;
  };
   *
   * **Add and remove tags to and from a sticky note**
   *
  tagIds?: string[];
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  content?: string;
};
interface Embed extends WidgetMixin, Readonly<SizeMixin> {
  readonly type: "embed";
  x: number;
  y: number;
  readonly width: number;
  readonly height: number;
  url: string;
  thumbnailUrl: string;
  mode: "inline" | "modal";
}
type EmbedProps = {
  readonly width?: number;
  readonly height?: number;
  readonly type?: "embed";
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  url?: string;
  thumbnailUrl?: string;
  mode?: "inline" | "modal";
};
interface Text extends WidgetMixin, Readonly<SizeMixin>, RotationMixin {
  readonly type: "text";
  content: string;
  style: {
    fillColor: string;
  };
}
type TextProps = {
  width?: number;
  height?: number;
  readonly type?: "text";
  style?: {
    fillColor: string;
  };
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  rotation?: number;
  content?: string;
};
export type Item =
  | Card
  | AppCard
  | Frame
  | Image
  | Opaque
  | Preview
  | Shape
  | StickyNote
  | Text
  | Embed;
// ----------------------------------------------------------------------------
// Entities
export type EntityType = "tag";
interface Tag extends EntityMixin {
  readonly type: "tag";
  title: string;
  color: TagColor | `${TagColor}`;
}
export type TagProps = {
  readonly type?: "tag";
  title?: string;
  readonly id?: string;
  color?: TagColor | `${TagColor}`;
};
export type Entity = Tag;
// ----------------------------------------------------------------------------
// Events
type DropEvent = {
  x: number;
  y: number;
  target: Element;
};
type AppCardOpenEvent = {
  appCard: Readonly<WidgetPropsOnly<AppCard>>;
};
type AppEventType = "icon:click" | "app_card:open";
type EventType = "drop" | AppEventType;
// ----------------------------------------------------------------------------
// User interface
interface BoardUI {
  openPanel(options: {
    pageUrl: string;
    maxHeight?: number;
  }): Promise<void>;
  closePanel(): Promise<void>;
  openModal(options: {
    pageUrl: string;
    maxHeight?: number;
    maxWidth?: number;
    fullscreen?: boolean;
  }): Promise<void>;
  closeModal(): Promise<void>;
  on(event: "drop", handler: (event: DropEvent) => void): void;
  on(event: "icon:click", handler: () => void): void;
  on(event: "app_card:open", handler: (event: AppCardOpenEvent) => void): void;
  on(event: EventType, handler: (event: DropEvent) => void): void;
}
// ----------------------------------------------------------------------------
// Board viewport
interface BoardViewport {
  get(): Promise<Rect>;
  set(options: {
     * Current viewport position
    viewport: Rect;
     * Padding between the target viewport and the final result
     * Defaults to 0
    padding?: Offset;
     * Time in milliseconds for an animation effect.
     * Defaults to no animation.
    animationDurationInMs?: number;
  }): Promise<Rect>;
  zoomTo(items: BoardWidgets): Promise<void>;
}
// ----------------------------------------------------------------------------
// Board
type BoardNode = Item | Tag;
type BoardNodes = BoardNode[];
type BoardInput = BoardNode | BoardNodes;
type BoardWidgets = Item | Item[];
type BoardInfo = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
type GetFilter =
  | {
      id: string[] | string;
    }
  | {
      type?: string[] | string;
      tags?: string[] | string;
    };
type AppData = Json;
type UserInfo = {
  id: string;
};
export interface Board {
  readonly ui: BoardUI;
  readonly viewport: BoardViewport;
  createCard(props?: CardProps): Promise<Card>;
  createAppCard(props?: AppCardProps): Promise<AppCard>;
  createFrame(props?: FrameProps): Promise<Frame>;
  createImage(props: ImageProps): Promise<Image>;
  createPreview(props: PreviewProps): Promise<Preview>;
  createShape(props?: ShapeProps): Promise<Shape>;
  createStickyNote(props?: StickyNoteProps): Promise<StickyNote>;
  createText(props?: TextProps): Promise<Text>;
  createEmbed(props: EmbedProps): Promise<Embed>;
  createTag(props?: TagProps): Promise<Tag>;
  sync(item: BaseMixin): Promise<void>;
  remove(input: BoardNode): Promise<void>;
  bringToFront(input: Item): Promise<void>;
  sendToBack(input: Item): Promise<void>;
  getById(id: string): Promise<BoardNode>;
  get(
    filter: GetFilter & {
      type: "card";
    }
  ): Promise<Card[]>;
  get(
    filter: GetFilter & {
      type: "frame";
    }
  ): Promise<Frame[]>;
  get(
    filter: GetFilter & {
      type: "image";
    }
  ): Promise<Image[]>;
  get(
    filter: GetFilter & {
      type: "opaque";
    }
  ): Promise<Opaque[]>;
  get(
    filter: GetFilter & {
      type: "preview";
    }
  ): Promise<Preview[]>;
  get(
    filter: GetFilter & {
      type: "shape";
    }
  ): Promise<Shape[]>;
  get(
    filter: GetFilter & {
      type: "sticky_note";
    }
  ): Promise<StickyNote[]>;
  get(
    filter: GetFilter & {
      type: "text";
    }
  ): Promise<Text[]>;
  get(
    filter: GetFilter & {
      type: "embed";
    }
  ): Promise<Embed[]>;
  get(
    filter: GetFilter & {
      type: "tag";
    }
  ): Promise<Tag[]>;
  get(filter?: GetFilter): Promise<BoardNode[]>;
  getInfo(): Promise<BoardInfo>;
  getUserInfo(): Promise<UserInfo>;
  getSelection(): Promise<Item[]>;
  getAppData(key: string): Promise<AppData>;
  setAppData(key: string, value: AppData): Promise<AppData>;
  getIdToken(): Promise<string>;
}
// ----------------------------------------------------------------------------
// Globals
interface Miro {
  readonly board: Board;
}
declare global {
  var miro: Miro;
}
