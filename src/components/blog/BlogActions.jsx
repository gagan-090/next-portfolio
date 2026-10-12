'use client';

import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { blogService } from '@/lib/blogService';
import ShareButtons from './ShareButtons';

// Helper to get or create a persistent device ID
const getDeviceId = () => {
  let deviceId = localStorage.getItem('device_id');
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem('device_id', deviceId);
  }
  return deviceId;
};

/**
 * Client island for a server-rendered article: records a unique view,
 * and handles like/unlike plus sharing.
 */
const BlogActions = ({ blogId, initialLikes = 0, url, title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const deviceId = getDeviceId();
        const isLiked = await blogService.hasLiked(blogId, deviceId);
        if (!cancelled) setHasLiked(isLiked);

        const viewedKey = `viewed_${blogId}_${deviceId}`;
        if (!localStorage.getItem(viewedKey)) {
          const viewRecorded = await blogService.recordView(blogId, deviceId);
          if (viewRecorded) localStorage.setItem(viewedKey, 'true');
        }
      } catch {
        // Storage can be unavailable (private mode); engagement is best-effort.
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [blogId]);

  const handleLike = async () => {
    let deviceId;
    try {
      deviceId = getDeviceId();
    } catch {
      return;
    }

    // Optimistic UI update
    const newLikedState = !hasLiked;
    setHasLiked(newLikedState);
    setLikeCount((c) => c + (newLikedState ? 1 : -1));

    const result = await blogService.toggleLike(blogId, deviceId);
    if (result.error) {
      // Revert on error
      setHasLiked(!newLikedState);
      setLikeCount((c) => c + (newLikedState ? -1 : 1));
    }
  };

  return (
    <div className="mt-16 pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-6">
      <button
        onClick={handleLike}
        aria-pressed={hasLiked}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-label-mono text-[12px] uppercase tracking-widest transition-all duration-200 ${
          hasLiked
            ? 'bg-red-50 text-red-500 border border-red-200 hover:bg-red-100'
            : 'bg-surface-container text-on-surface-variant border border-outline-variant hover:bg-surface-container-high'
        }`}
      >
        <Heart size={16} className={hasLiked ? 'fill-current' : ''} />
        {hasLiked ? 'Liked' : 'Like this post'}
        <span className="opacity-70">· {Math.max(0, likeCount).toLocaleString()}</span>
      </button>
      <ShareButtons url={url} title={title} />
    </div>
  );
};

export default BlogActions;
