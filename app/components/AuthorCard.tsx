import Image from "next/image";

export interface AuthorCardProps {
  name: string;
  alias?: string;
  roles: string[];
  bio: string;
  stats: {
    clients: number;
    years: number;
  };
  photo?: {
    src: string;
    alt: string;
  };
}

export function AuthorCard({ name, alias, roles, bio, stats, photo }: AuthorCardProps) {
  return (
    <aside className="rounded-3xl border border-outline/60 bg-surface/80 p-6 shadow-xl backdrop-blur">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-outline/80 bg-outline/30">
          {photo?.src ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="96px"
              priority
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-sm text-muted">
              {/* TODO: заменить на фото автора */}
              Фото
            </span>
          )}
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Автор</p>
            <h2 className="text-2xl font-semibold text-white">
              {name}
              {alias ? <span className="text-muted"> ({alias})</span> : null}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted">{bio}</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-wide text-muted/80">
            {roles.map((role) => (
              <li key={role} className="rounded-full border border-outline/50 px-3 py-1">
                {role}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 text-sm text-muted/90">
            <div className="rounded-xl bg-white/5 px-4 py-2">
              <span className="text-2xl font-semibold text-white">{stats.clients.toLocaleString("ru-RU")}</span>
              <span className="ml-2 text-muted">клиентов</span>
            </div>
            <div className="rounded-xl bg-white/5 px-4 py-2">
              <span className="text-2xl font-semibold text-white">{stats.years}</span>
              <span className="ml-2 text-muted">лет практики</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
