import { Button } from "@/components/ui-elements/button";
import { ShowcaseCollapsible } from "@/components/Layouts/showcase/collapsible";

interface Props extends React.PropsWithChildren {
  title: string;
  initiallyOpen?: boolean;
  isSaving?: boolean;
  onSubmit: (data: any) => void;
}

export default function FormLayout({
  children,
  title,
  initiallyOpen = false,
  isSaving = false,
  onSubmit,
}: Props) {
  return (
    <ShowcaseCollapsible
      title={title}
      className="!p-6.5"
      initiallyOpen={initiallyOpen}
    >
      <form
        onSubmit={onSubmit}
        className="*:mb-4.5 *:flex *:flex-col *:gap-4.5 *:xl:flex-row *:xl:items-end"
      >
        {children}

        <Button
          type="submit"
          label={isSaving ? "Salvando..." : "Salvar"}
          className="mt-6 flex w-full cursor-pointer justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
          disabled={isSaving}
        />
      </form>
    </ShowcaseCollapsible>
  );
}
