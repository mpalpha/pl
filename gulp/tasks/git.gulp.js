/**
 * git Tasks
 */

'use strict';

const gulp = require('gulp');
const pump = require('pump');
const runSequence = require('run-sequence');
const $ = require('gulp-load-plugins')({ lazy: true });
const config = require('../gulp.config')();
const args = require('yargs').argv;
const bumpVersion = args.major || args.minor || 'patch';
const debugging = args.debug || false;
const getPackageJson = () => {
  // get uncached package.json
  return JSON.parse(require('fs').readFileSync('./package.json', 'utf8'));
};

/**
 * git add and amend commit
 */
gulp.task('git-commit-amend', () => {
  let version = getPackageJson().version; // get version
  return gulp
    .src('.')
    .pipe(
      $.if(
        debugging,
        $.debug({
          title: 'git commit:'
        })
      )
    )
    .pipe($.git.commit('v' + version, process.platform === 'win32' ? { args: '--amend' } : { args: '-a --amend' }));
});

/**
 * git add and commit
 */
gulp.task('git-commit', () => {
  let version = getPackageJson().version; // get version
  return gulp
    .src('.')
    .pipe(
      $.if(
        debugging,
        $.debug({
          title: 'git commit:'
        })
      )
    )
    .pipe($.git.commit('v' + version, process.platform === 'win32' ? {} : { args: '-a' }));
});

/**
 * generate changelog
 */
gulp.task('changelog', () => {
  return gulp
    .src('./CHANGELOG.md', {
      buffer: false
    })
    .pipe($.conventionalChangelog())
    .pipe(gulp.dest('./'));
});

/**
 * git reset
 */
gulp.task('reset-head', cb => {
  $.git.reset('HEAD~1', { args: '--soft' }, err => {
    if (err) throw err;
  });
  cb();
});

/**
 * git push
 */
gulp.task('git-push', cb => {
  $.git.push('origin', 'HEAD', { args: '--follow-tags' });
  cb();
});

/**
 * Tag the repository with a version
 */
gulp.task('git-tag', () => {
  let version = getPackageJson().version; // get version
  return $.git.tag('v' + version, 'Version ' + version, { args: '-a -f' });
});

/**
 * release a version
 */
gulp.task('release-version', () => {
  let repo = getPackageJson().repository.url; // get repository
  return gulp.src(['**/*', '!node_modules/**/*']).pipe(
    $.gitRelease({
      release: true,
      debug: true,
      additionalPackageFiles: ['./package.json'],
      repository: repo,
      bumpVersion: false
    })
  );
});

/**
 * Build, commit, bump, and push your local branch (default: patch)
 * @task {release}
 * @order {3}
 * @arg {minor} show verbose build information
 * @arg {major} show debug information
 */
gulp.task('release', cb => {
  runSequence(
    'release-prep',
    'bump-version',
    'changelog',
    'git-commit',
    'git-tag',
    'git-push',
    err => {
      cb(err || undefined);
    }
  );
});

/**
 * Build and prepare the project for a release.
 * @task {release-prep}
 * @order {2}
 * @arg {fixcss} fix stylelint errors (use with caution!)
 */
gulp.task('release-prep', cb => {
  return runSequence(
    'clean-dist',
    'build-templates',
    'styles',
    'copy-assets',
    cb
  );
});
