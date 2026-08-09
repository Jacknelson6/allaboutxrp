-- The repository-backed Codex schedule replaces the legacy RSS/model-API job.
-- Keep this idempotent so environments without the old job can apply safely.
do $$
begin
  if exists (select 1 from cron.job where jobname = 'fetch-news') then
    perform cron.unschedule('fetch-news');
  end if;
end
$$;
