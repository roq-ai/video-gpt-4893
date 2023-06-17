const mapping: Record<string, string> = {
  individuals: 'individual',
  'team-members': 'team_member',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
