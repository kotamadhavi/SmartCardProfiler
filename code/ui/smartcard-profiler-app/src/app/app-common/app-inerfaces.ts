export interface DataTableColumn {
  data: string;
  title: string;
  isLink?: boolean;
  isLinkDisabled?: boolean;
  linkUrl?: string;
  isExternalLink?: boolean;
  isJson?: boolean;
  isDateMedium?: boolean;
  isActivityIdCol?: boolean;
}
