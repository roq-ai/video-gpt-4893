import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Content Creator'];
  const roles = ['Content Creator'];
  const applicationName = `VIDEO-GPT`;
  const tenantName = `Individual`;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Title: Content Creator creates an Individual

As a Content Creator,
I want to create an Individual,
So that I can generate automated videos with narration and trending content.

Title: Content Creator updates an Individual

As a Content Creator,
I want to update an Individual,
So that I can modify the video generation settings and content sources.

Title: Content Creator deletes an Individual

As a Content Creator,
I want to delete an Individual,
So that I can remove unwanted video generation configurations.

Title: Content Creator views a list of Individuals

As a Content Creator,
I want to view a list of Individuals,
So that I can manage and select the desired video generation settings.

Title: Content Creator generates a video

As a Content Creator,
I want to generate a video using an Individual,
So that I can obtain an automated video with narration and trending content.

Title: Content Creator views generated videos

As a Content Creator,
I want to view a list of generated videos,
So that I can manage, preview, and download the videos.

Title: Content Creator deletes a generated video

As a Content Creator,
I want to delete a generated video,
So that I can remove unwanted videos from the list.

Title: Content Creator invites a team member

As a Content Creator,
I want to invite a team member to the application,
So that they can collaborate and contribute to the video generation process.

Title: Team Member views a list of Individuals

As a Team Member,
I want to view a list of Individuals,
So that I can understand the video generation settings and content sources.

Title: Team Member views generated videos

As a Team Member,
I want to view a list of generated videos,
So that I can preview and download the videos for further use.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="30px" bottom="20px" zIndex={3}>
      <Popover placement="top-end">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent w="50vw" h="70vh">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
